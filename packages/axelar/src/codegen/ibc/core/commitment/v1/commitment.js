import { CommitmentProof } from "../../../../proofs";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMerkleRoot() {
    return {
        hash: new Uint8Array()
    };
}
export const MerkleRoot = {
    typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMerkleRoot();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerkleRoot();
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
        return MerkleRoot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleRoot",
            value: MerkleRoot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerkleRoot.decode(message.value);
    },
    toProto(message) {
        return MerkleRoot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
            value: MerkleRoot.encode(message).finish()
        };
    }
};
function createBaseMerklePrefix() {
    return {
        keyPrefix: new Uint8Array()
    };
}
export const MerklePrefix = {
    typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
    encode(message, writer = BinaryWriter.create()) {
        if (message.keyPrefix.length !== 0) {
            writer.uint32(10).bytes(message.keyPrefix);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyPrefix: isSet(object.keyPrefix) ? bytesFromBase64(object.keyPrefix) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMerklePrefix();
        message.keyPrefix = object.keyPrefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerklePrefix();
        if (object.key_prefix !== undefined && object.key_prefix !== null) {
            message.keyPrefix = bytesFromBase64(object.key_prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_prefix = message.keyPrefix ? base64FromBytes(message.keyPrefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MerklePrefix.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePrefix",
            value: MerklePrefix.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerklePrefix.decode(message.value);
    },
    toProto(message) {
        return MerklePrefix.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
            value: MerklePrefix.encode(message).finish()
        };
    }
};
function createBaseMerklePath() {
    return {
        keyPath: []
    };
}
export const MerklePath = {
    typeUrl: "/ibc.core.commitment.v1.MerklePath",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.keyPath) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keyPath: Array.isArray(object?.keyPath) ? object.keyPath.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.keyPath?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.key_path?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keyPath) {
            obj.key_path = message.keyPath.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MerklePath.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePath",
            value: MerklePath.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerklePath.decode(message.value);
    },
    toProto(message) {
        return MerklePath.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePath",
            value: MerklePath.encode(message).finish()
        };
    }
};
function createBaseMerkleProof() {
    return {
        proofs: []
    };
}
export const MerkleProof = {
    typeUrl: "/ibc.core.commitment.v1.MerkleProof",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.proofs) {
            CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => CommitmentProof.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => CommitmentProof.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? CommitmentProof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MerkleProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleProof",
            value: MerkleProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerkleProof.decode(message.value);
    },
    toProto(message) {
        return MerkleProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleProof",
            value: MerkleProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commitment.js.map