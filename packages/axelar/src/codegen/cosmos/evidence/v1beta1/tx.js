import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgSubmitEvidence() {
    return {
        submitter: "",
        evidence: undefined
    };
}
export const MsgSubmitEvidence = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            submitter: isSet(object.submitter) ? String(object.submitter) : "",
            evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidence();
        message.submitter = object.submitter ?? "";
        message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitEvidence();
        if (object.submitter !== undefined && object.submitter !== null) {
            message.submitter = object.submitter;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = Evidence_FromAmino(object.evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.submitter = message.submitter;
        obj.evidence = message.evidence ? Evidence_ToAmino(message.evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitEvidence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidence",
            value: MsgSubmitEvidence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitEvidence.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
            value: MsgSubmitEvidence.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitEvidenceResponse() {
    return {
        hash: new Uint8Array()
    };
}
export const MsgSubmitEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidenceResponse();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitEvidenceResponse();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitEvidenceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitEvidenceResponse",
            value: MsgSubmitEvidenceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
            value: MsgSubmitEvidenceResponse.encode(message).finish()
        };
    }
};
export const Evidence_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Evidence_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Evidence_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=tx.js.map