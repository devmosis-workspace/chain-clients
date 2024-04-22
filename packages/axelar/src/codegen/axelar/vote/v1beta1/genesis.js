import { Params } from "./params";
import { PollMetadata } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        pollMetadatas: []
    };
}
export const GenesisState = {
    typeUrl: "/axelar.vote.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pollMetadatas) {
            PollMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            pollMetadatas: Array.isArray(object?.pollMetadatas) ? object.pollMetadatas.map((e) => PollMetadata.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.pollMetadatas = object.pollMetadatas?.map(e => PollMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.pollMetadatas = object.poll_metadatas?.map(e => PollMetadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.pollMetadatas) {
            obj.poll_metadatas = message.pollMetadatas.map(e => e ? PollMetadata.toAmino(e) : undefined);
        }
        else {
            obj.poll_metadatas = [];
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
            typeUrl: "/axelar.vote.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map