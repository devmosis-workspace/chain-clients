import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseApp() {
    return {
        protocol: BigInt(0),
        software: ""
    };
}
export const App = {
    typeUrl: "/tendermint.version.App",
    encode(message, writer = BinaryWriter.create()) {
        if (message.protocol !== BigInt(0)) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt(0),
            software: isSet(object.software) ? String(object.software) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
        message.software = object.software ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseApp();
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = BigInt(object.protocol);
        }
        if (object.software !== undefined && object.software !== null) {
            message.software = object.software;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol = message.protocol ? message.protocol.toString() : undefined;
        obj.software = message.software;
        return obj;
    },
    fromAminoMsg(object) {
        return App.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return App.decode(message.value);
    },
    toProto(message) {
        return App.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: App.encode(message).finish()
        };
    }
};
function createBaseConsensus() {
    return {
        block: BigInt(0),
        app: BigInt(0)
    };
}
export const Consensus = {
    typeUrl: "/tendermint.version.Consensus",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
            app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensus();
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
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Consensus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Consensus.decode(message.value);
    },
    toProto(message) {
        return Consensus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: Consensus.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map