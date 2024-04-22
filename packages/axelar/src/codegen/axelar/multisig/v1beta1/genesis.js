import { Params } from "./params";
import { KeygenSession, SigningSession, Key, KeyEpoch } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        keygenSessions: [],
        signingSessions: [],
        keys: [],
        keyEpochs: []
    };
}
export const GenesisState = {
    typeUrl: "/axelar.multisig.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.keygenSessions) {
            KeygenSession.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signingSessions) {
            SigningSession.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.keys) {
            Key.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.keyEpochs) {
            KeyEpoch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            keygenSessions: Array.isArray(object?.keygenSessions) ? object.keygenSessions.map((e) => KeygenSession.fromJSON(e)) : [],
            signingSessions: Array.isArray(object?.signingSessions) ? object.signingSessions.map((e) => SigningSession.fromJSON(e)) : [],
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => Key.fromJSON(e)) : [],
            keyEpochs: Array.isArray(object?.keyEpochs) ? object.keyEpochs.map((e) => KeyEpoch.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.keygenSessions = object.keygenSessions?.map(e => KeygenSession.fromPartial(e)) || [];
        message.signingSessions = object.signingSessions?.map(e => SigningSession.fromPartial(e)) || [];
        message.keys = object.keys?.map(e => Key.fromPartial(e)) || [];
        message.keyEpochs = object.keyEpochs?.map(e => KeyEpoch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.keygenSessions = object.keygen_sessions?.map(e => KeygenSession.fromAmino(e)) || [];
        message.signingSessions = object.signing_sessions?.map(e => SigningSession.fromAmino(e)) || [];
        message.keys = object.keys?.map(e => Key.fromAmino(e)) || [];
        message.keyEpochs = object.key_epochs?.map(e => KeyEpoch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.keygenSessions) {
            obj.keygen_sessions = message.keygenSessions.map(e => e ? KeygenSession.toAmino(e) : undefined);
        }
        else {
            obj.keygen_sessions = [];
        }
        if (message.signingSessions) {
            obj.signing_sessions = message.signingSessions.map(e => e ? SigningSession.toAmino(e) : undefined);
        }
        else {
            obj.signing_sessions = [];
        }
        if (message.keys) {
            obj.keys = message.keys.map(e => e ? Key.toAmino(e) : undefined);
        }
        else {
            obj.keys = [];
        }
        if (message.keyEpochs) {
            obj.key_epochs = message.keyEpochs.map(e => e ? KeyEpoch.toAmino(e) : undefined);
        }
        else {
            obj.key_epochs = [];
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
            typeUrl: "/axelar.multisig.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map