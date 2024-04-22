import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseCommitInfo() {
    return {
        version: BigInt(0),
        storeInfos: []
    };
}
export const CommitInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            storeInfos: Array.isArray(object?.storeInfos) ? object.storeInfos.map((e) => StoreInfo.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.storeInfos = object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        message.storeInfos = object.store_infos?.map(e => StoreInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.storeInfos) {
            obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitInfo.decode(message.value);
    },
    toProto(message) {
        return CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
            value: CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commitId: CommitID.fromPartial({})
    };
}
export const StoreInfo = {
    typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            commitId: isSet(object.commitId) ? CommitID.fromJSON(object.commitId) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.commit_id !== undefined && object.commit_id !== null) {
            message.commitId = CommitID.fromAmino(object.commit_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreInfo.decode(message.value);
    },
    toProto(message) {
        return StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
            value: StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: BigInt(0),
        hash: new Uint8Array()
    };
}
export const CommitID = {
    typeUrl: "/cosmos.base.store.v1beta1.CommitID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitID();
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitID.decode(message.value);
    },
    toProto(message) {
        return CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.CommitID",
            value: CommitID.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commit_info.js.map