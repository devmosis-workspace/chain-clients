import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseNetAddress() {
    return {
        id: "",
        ip: "",
        port: 0
    };
}
export const NetAddress = {
    typeUrl: "/tendermint.p2p.NetAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            ip: isSet(object.ip) ? String(object.ip) : "",
            port: isSet(object.port) ? Number(object.port) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseNetAddress();
        message.id = object.id ?? "";
        message.ip = object.ip ?? "";
        message.port = object.port ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseNetAddress();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.ip = message.ip;
        obj.port = message.port;
        return obj;
    },
    fromAminoMsg(object) {
        return NetAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NetAddress.decode(message.value);
    },
    toProto(message) {
        return NetAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NetAddress",
            value: NetAddress.encode(message).finish()
        };
    }
};
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
export const ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    encode(message, writer = BinaryWriter.create()) {
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
            block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
            app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseProtocolVersion();
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = BigInt(object.p2p);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.p2p = message.p2p ? message.p2p.toString() : undefined;
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfo() {
    return {
        protocolVersion: ProtocolVersion.fromPartial({}),
        defaultNodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: DefaultNodeInfoOther.fromPartial({})
    };
}
export const DefaultNodeInfo = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.protocolVersion !== undefined) {
            ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultNodeId !== "") {
            writer.uint32(18).string(message.defaultNodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            protocolVersion: isSet(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
            defaultNodeId: isSet(object.defaultNodeId) ? String(object.defaultNodeId) : "",
            listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.defaultNodeId = object.defaultNodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? DefaultNodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDefaultNodeInfo();
        if (object.protocol_version !== undefined && object.protocol_version !== null) {
            message.protocolVersion = ProtocolVersion.fromAmino(object.protocol_version);
        }
        if (object.default_node_id !== undefined && object.default_node_id !== null) {
            message.defaultNodeId = object.default_node_id;
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listenAddr = object.listen_addr;
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = bytesFromBase64(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = DefaultNodeInfoOther.fromAmino(object.other);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion) : undefined;
        obj.default_node_id = message.defaultNodeId;
        obj.listen_addr = message.listenAddr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels ? base64FromBytes(message.channels) : undefined;
        obj.moniker = message.moniker;
        obj.other = message.other ? DefaultNodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DefaultNodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DefaultNodeInfo.decode(message.value);
    },
    toProto(message) {
        return DefaultNodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfo",
            value: DefaultNodeInfo.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
export const DefaultNodeInfoOther = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txIndex: isSet(object.txIndex) ? String(object.txIndex) : "",
            rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDefaultNodeInfoOther();
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = object.tx_index;
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpcAddress = object.rpc_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.txIndex;
        obj.rpc_address = message.rpcAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return DefaultNodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DefaultNodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return DefaultNodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
            value: DefaultNodeInfoOther.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map