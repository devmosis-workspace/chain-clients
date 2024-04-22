import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
export const Http = {
    typeUrl: "/google.api.Http",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rules) {
            HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => HttpRule.fromJSON(e)) : [],
            fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
        };
    },
    fromPartial(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => HttpRule.fromPartial(e)) || [];
        message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => HttpRule.fromAmino(e)) || [];
        if (object.fully_decode_reserved_expansion !== undefined && object.fully_decode_reserved_expansion !== null) {
            message.fullyDecodeReservedExpansion = object.fully_decode_reserved_expansion;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(e => e ? HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion;
        return obj;
    },
    fromAminoMsg(object) {
        return Http.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Http.decode(message.value);
    },
    toProto(message) {
        return Http.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.Http",
            value: Http.encode(message).finish()
        };
    }
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
export const HttpRule = {
    typeUrl: "/google.api.HttpRule",
    encode(message, writer = BinaryWriter.create()) {
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            selector: isSet(object.selector) ? String(object.selector) : "",
            get: isSet(object.get) ? String(object.get) : undefined,
            put: isSet(object.put) ? String(object.put) : undefined,
            post: isSet(object.post) ? String(object.post) : undefined,
            delete: isSet(object.delete) ? String(object.delete) : undefined,
            patch: isSet(object.patch) ? String(object.patch) : undefined,
            custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? String(object.body) : "",
            responseBody: isSet(object.responseBody) ? String(object.responseBody) : "",
            additionalBindings: Array.isArray(object?.additionalBindings) ? object.additionalBindings.map((e) => HttpRule.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseHttpRule();
        message.selector = object.selector ?? "";
        message.get = object.get ?? undefined;
        message.put = object.put ?? undefined;
        message.post = object.post ?? undefined;
        message.delete = object.delete ?? undefined;
        message.patch = object.patch ?? undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
        message.body = object.body ?? "";
        message.responseBody = object.responseBody ?? "";
        message.additionalBindings = object.additionalBindings?.map(e => HttpRule.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHttpRule();
        if (object.selector !== undefined && object.selector !== null) {
            message.selector = object.selector;
        }
        if (object.get !== undefined && object.get !== null) {
            message.get = object.get;
        }
        if (object.put !== undefined && object.put !== null) {
            message.put = object.put;
        }
        if (object.post !== undefined && object.post !== null) {
            message.post = object.post;
        }
        if (object.delete !== undefined && object.delete !== null) {
            message.delete = object.delete;
        }
        if (object.patch !== undefined && object.patch !== null) {
            message.patch = object.patch;
        }
        if (object.custom !== undefined && object.custom !== null) {
            message.custom = CustomHttpPattern.fromAmino(object.custom);
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        if (object.response_body !== undefined && object.response_body !== null) {
            message.responseBody = object.response_body;
        }
        message.additionalBindings = object.additional_bindings?.map(e => HttpRule.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.selector = message.selector;
        obj.get = message.get;
        obj.put = message.put;
        obj.post = message.post;
        obj.delete = message.delete;
        obj.patch = message.patch;
        obj.custom = message.custom ? CustomHttpPattern.toAmino(message.custom) : undefined;
        obj.body = message.body;
        obj.response_body = message.responseBody;
        if (message.additionalBindings) {
            obj.additional_bindings = message.additionalBindings.map(e => e ? HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.additional_bindings = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HttpRule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HttpRule.decode(message.value);
    },
    toProto(message) {
        return HttpRule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.HttpRule",
            value: HttpRule.encode(message).finish()
        };
    }
};
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
export const CustomHttpPattern = {
    typeUrl: "/google.api.CustomHttpPattern",
    encode(message, writer = BinaryWriter.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            kind: isSet(object.kind) ? String(object.kind) : "",
            path: isSet(object.path) ? String(object.path) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCustomHttpPattern();
        message.kind = object.kind ?? "";
        message.path = object.path ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCustomHttpPattern();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.kind = message.kind;
        obj.path = message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return CustomHttpPattern.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CustomHttpPattern.decode(message.value);
    },
    toProto(message) {
        return CustomHttpPattern.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.CustomHttpPattern",
            value: CustomHttpPattern.encode(message).finish()
        };
    }
};
//# sourceMappingURL=http.js.map