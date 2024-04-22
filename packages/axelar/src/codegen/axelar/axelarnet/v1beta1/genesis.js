import { Params } from "./params";
import { CosmosChain, IBCTransfer } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject, base64FromBytes } from "../../../helpers";
function createBaseGenesisState_SeqIdMappingEntry() {
    return {
        key: "",
        value: BigInt(0)
    };
}
export const GenesisState_SeqIdMappingEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState_SeqIdMappingEntry();
        message.key = object.key ?? "";
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState_SeqIdMappingEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState_SeqIdMappingEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState_SeqIdMappingEntry.decode(message.value);
    },
    toProto(message) {
        return GenesisState_SeqIdMappingEntry.encode(message).finish();
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        collectorAddress: new Uint8Array(),
        chains: [],
        transferQueue: QueueState.fromPartial({}),
        ibcTransfers: [],
        seqIdMapping: {}
    };
}
export const GenesisState = {
    typeUrl: "/axelar.axelarnet.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectorAddress.length !== 0) {
            writer.uint32(18).bytes(message.collectorAddress);
        }
        for (const v of message.chains) {
            CosmosChain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.transferQueue !== undefined) {
            QueueState.encode(message.transferQueue, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.ibcTransfers) {
            IBCTransfer.encode(v, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.seqIdMapping).forEach(([key, value]) => {
            GenesisState_SeqIdMappingEntry.encode({
                key: key,
                value
            }, writer.uint32(64).fork()).ldelim();
        });
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            collectorAddress: isSet(object.collectorAddress) ? bytesFromBase64(object.collectorAddress) : new Uint8Array(),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => CosmosChain.fromJSON(e)) : [],
            transferQueue: isSet(object.transferQueue) ? QueueState.fromJSON(object.transferQueue) : undefined,
            ibcTransfers: Array.isArray(object?.ibcTransfers) ? object.ibcTransfers.map((e) => IBCTransfer.fromJSON(e)) : [],
            seqIdMapping: isObject(object.seqIdMapping) ? Object.entries(object.seqIdMapping).reduce((acc, [key, value]) => {
                acc[key] = BigInt(value.toString());
                return acc;
            }, {}) : {}
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.collectorAddress = object.collectorAddress ?? new Uint8Array();
        message.chains = object.chains?.map(e => CosmosChain.fromPartial(e)) || [];
        message.transferQueue = object.transferQueue !== undefined && object.transferQueue !== null ? QueueState.fromPartial(object.transferQueue) : undefined;
        message.ibcTransfers = object.ibcTransfers?.map(e => IBCTransfer.fromPartial(e)) || [];
        message.seqIdMapping = Object.entries(object.seqIdMapping ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = BigInt(value.toString());
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.collector_address !== undefined && object.collector_address !== null) {
            message.collectorAddress = bytesFromBase64(object.collector_address);
        }
        message.chains = object.chains?.map(e => CosmosChain.fromAmino(e)) || [];
        if (object.transfer_queue !== undefined && object.transfer_queue !== null) {
            message.transferQueue = QueueState.fromAmino(object.transfer_queue);
        }
        message.ibcTransfers = object.ibc_transfers?.map(e => IBCTransfer.fromAmino(e)) || [];
        message.seqIdMapping = Object.entries(object.seq_id_mapping ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = BigInt(value.toString());
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.collector_address = message.collectorAddress ? base64FromBytes(message.collectorAddress) : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e ? CosmosChain.toAmino(e) : undefined);
        }
        else {
            obj.chains = [];
        }
        obj.transfer_queue = message.transferQueue ? QueueState.toAmino(message.transferQueue) : undefined;
        if (message.ibcTransfers) {
            obj.ibc_transfers = message.ibcTransfers.map(e => e ? IBCTransfer.toAmino(e) : undefined);
        }
        else {
            obj.ibc_transfers = [];
        }
        obj.seq_id_mapping = {};
        if (message.seqIdMapping) {
            Object.entries(message.seqIdMapping).forEach(([k, v]) => {
                obj.seq_id_mapping[k] = v.toString();
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map