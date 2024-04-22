import { RequestDeliverTx, ResponseDeliverTx, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, ResponseCommit } from "../../../../tendermint/abci/types";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseStoreKVPair() {
    return {
        storeKey: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const StoreKVPair = {
    typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
    encode(message, writer = BinaryWriter.create()) {
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
            delete: isSet(object.delete) ? Boolean(object.delete) : false,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.storeKey = object.storeKey ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreKVPair();
        if (object.store_key !== undefined && object.store_key !== null) {
            message.storeKey = object.store_key;
        }
        if (object.delete !== undefined && object.delete !== null) {
            message.delete = object.delete;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.store_key = message.storeKey;
        obj.delete = message.delete;
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreKVPair.decode(message.value);
    },
    toProto(message) {
        return StoreKVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
            value: StoreKVPair.encode(message).finish()
        };
    }
};
function createBaseBlockMetadata() {
    return {
        requestBeginBlock: undefined,
        responseBeginBlock: undefined,
        deliverTxs: [],
        requestEndBlock: undefined,
        responseEndBlock: undefined,
        responseCommit: undefined
    };
}
export const BlockMetadata = {
    typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.requestBeginBlock !== undefined) {
            RequestBeginBlock.encode(message.requestBeginBlock, writer.uint32(10).fork()).ldelim();
        }
        if (message.responseBeginBlock !== undefined) {
            ResponseBeginBlock.encode(message.responseBeginBlock, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.deliverTxs) {
            BlockMetadata_DeliverTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.requestEndBlock !== undefined) {
            RequestEndBlock.encode(message.requestEndBlock, writer.uint32(34).fork()).ldelim();
        }
        if (message.responseEndBlock !== undefined) {
            ResponseEndBlock.encode(message.responseEndBlock, writer.uint32(42).fork()).ldelim();
        }
        if (message.responseCommit !== undefined) {
            ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            requestBeginBlock: isSet(object.requestBeginBlock) ? RequestBeginBlock.fromJSON(object.requestBeginBlock) : undefined,
            responseBeginBlock: isSet(object.responseBeginBlock) ? ResponseBeginBlock.fromJSON(object.responseBeginBlock) : undefined,
            deliverTxs: Array.isArray(object?.deliverTxs) ? object.deliverTxs.map((e) => BlockMetadata_DeliverTx.fromJSON(e)) : [],
            requestEndBlock: isSet(object.requestEndBlock) ? RequestEndBlock.fromJSON(object.requestEndBlock) : undefined,
            responseEndBlock: isSet(object.responseEndBlock) ? ResponseEndBlock.fromJSON(object.responseEndBlock) : undefined,
            responseCommit: isSet(object.responseCommit) ? ResponseCommit.fromJSON(object.responseCommit) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata();
        message.requestBeginBlock = object.requestBeginBlock !== undefined && object.requestBeginBlock !== null ? RequestBeginBlock.fromPartial(object.requestBeginBlock) : undefined;
        message.responseBeginBlock = object.responseBeginBlock !== undefined && object.responseBeginBlock !== null ? ResponseBeginBlock.fromPartial(object.responseBeginBlock) : undefined;
        message.deliverTxs = object.deliverTxs?.map(e => BlockMetadata_DeliverTx.fromPartial(e)) || [];
        message.requestEndBlock = object.requestEndBlock !== undefined && object.requestEndBlock !== null ? RequestEndBlock.fromPartial(object.requestEndBlock) : undefined;
        message.responseEndBlock = object.responseEndBlock !== undefined && object.responseEndBlock !== null ? ResponseEndBlock.fromPartial(object.responseEndBlock) : undefined;
        message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockMetadata();
        if (object.request_begin_block !== undefined && object.request_begin_block !== null) {
            message.requestBeginBlock = RequestBeginBlock.fromAmino(object.request_begin_block);
        }
        if (object.response_begin_block !== undefined && object.response_begin_block !== null) {
            message.responseBeginBlock = ResponseBeginBlock.fromAmino(object.response_begin_block);
        }
        message.deliverTxs = object.deliver_txs?.map(e => BlockMetadata_DeliverTx.fromAmino(e)) || [];
        if (object.request_end_block !== undefined && object.request_end_block !== null) {
            message.requestEndBlock = RequestEndBlock.fromAmino(object.request_end_block);
        }
        if (object.response_end_block !== undefined && object.response_end_block !== null) {
            message.responseEndBlock = ResponseEndBlock.fromAmino(object.response_end_block);
        }
        if (object.response_commit !== undefined && object.response_commit !== null) {
            message.responseCommit = ResponseCommit.fromAmino(object.response_commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.request_begin_block = message.requestBeginBlock ? RequestBeginBlock.toAmino(message.requestBeginBlock) : undefined;
        obj.response_begin_block = message.responseBeginBlock ? ResponseBeginBlock.toAmino(message.responseBeginBlock) : undefined;
        if (message.deliverTxs) {
            obj.deliver_txs = message.deliverTxs.map(e => e ? BlockMetadata_DeliverTx.toAmino(e) : undefined);
        }
        else {
            obj.deliver_txs = [];
        }
        obj.request_end_block = message.requestEndBlock ? RequestEndBlock.toAmino(message.requestEndBlock) : undefined;
        obj.response_end_block = message.responseEndBlock ? ResponseEndBlock.toAmino(message.responseEndBlock) : undefined;
        obj.response_commit = message.responseCommit ? ResponseCommit.toAmino(message.responseCommit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BlockMetadata",
            value: BlockMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BlockMetadata.decode(message.value);
    },
    toProto(message) {
        return BlockMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
            value: BlockMetadata.encode(message).finish()
        };
    }
};
function createBaseBlockMetadata_DeliverTx() {
    return {
        request: undefined,
        response: undefined
    };
}
export const BlockMetadata_DeliverTx = {
    typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.request !== undefined) {
            RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        if (message.response !== undefined) {
            ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            request: isSet(object.request) ? RequestDeliverTx.fromJSON(object.request) : undefined,
            response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata_DeliverTx();
        message.request = object.request !== undefined && object.request !== null ? RequestDeliverTx.fromPartial(object.request) : undefined;
        message.response = object.response !== undefined && object.response !== null ? ResponseDeliverTx.fromPartial(object.response) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockMetadata_DeliverTx();
        if (object.request !== undefined && object.request !== null) {
            message.request = RequestDeliverTx.fromAmino(object.request);
        }
        if (object.response !== undefined && object.response !== null) {
            message.response = ResponseDeliverTx.fromAmino(object.response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.request = message.request ? RequestDeliverTx.toAmino(message.request) : undefined;
        obj.response = message.response ? ResponseDeliverTx.toAmino(message.response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMetadata_DeliverTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DeliverTx",
            value: BlockMetadata_DeliverTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BlockMetadata_DeliverTx.decode(message.value);
    },
    toProto(message) {
        return BlockMetadata_DeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
            value: BlockMetadata_DeliverTx.encode(message).finish()
        };
    }
};
//# sourceMappingURL=listening.js.map