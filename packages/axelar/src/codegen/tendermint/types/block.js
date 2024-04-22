import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseBlock() {
    return {
        header: Header.fromPartial({}),
        data: Data.fromPartial({}),
        evidence: EvidenceList.fromPartial({}),
        lastCommit: undefined
    };
}
export const Block = {
    typeUrl: "/tendermint.types.Block",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : undefined,
            lastCommit: isSet(object.lastCommit) ? Commit.fromJSON(object.lastCommit) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
        message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlock();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Data.fromAmino(object.data);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceList.fromAmino(object.evidence);
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.lastCommit = Commit.fromAmino(object.last_commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.data = message.data ? Data.toAmino(message.data) : undefined;
        obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : undefined;
        obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Block.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Block.decode(message.value);
    },
    toProto(message) {
        return Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Block",
            value: Block.encode(message).finish()
        };
    }
};
//# sourceMappingURL=block.js.map