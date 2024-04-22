import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryEvidenceRequest() {
    return {
        evidenceHash: new Uint8Array()
    };
}
export const QueryEvidenceRequest = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.evidenceHash.length !== 0) {
            writer.uint32(10).bytes(message.evidenceHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceRequest();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEvidenceRequest();
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = bytesFromBase64(object.evidence_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evidence_hash = message.evidenceHash ? base64FromBytes(message.evidenceHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceRequest",
            value: QueryEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
            value: QueryEvidenceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEvidenceResponse() {
    return {
        evidence: undefined
    };
}
export const QueryEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceResponse();
        message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEvidenceResponse();
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = Any.fromAmino(object.evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evidence = message.evidence ? Any.toAmino(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEvidenceResponse",
            value: QueryEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
            value: QueryEvidenceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllEvidenceRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllEvidenceRequest = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
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
        const message = createBaseQueryAllEvidenceRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllEvidenceRequest();
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
        return QueryAllEvidenceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceRequest",
            value: QueryAllEvidenceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllEvidenceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllEvidenceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
            value: QueryAllEvidenceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllEvidenceResponse() {
    return {
        evidence: [],
        pagination: undefined
    };
}
export const QueryAllEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.evidence) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = object.evidence?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = object.evidence?.map(e => Any.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllEvidenceResponse",
            value: QueryAllEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
            value: QueryAllEvidenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map