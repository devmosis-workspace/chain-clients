import { Threshold } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        defaultVotingThreshold: Threshold.fromPartial({}),
        endBlockerLimit: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/axelar.vote.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.defaultVotingThreshold !== undefined) {
            Threshold.encode(message.defaultVotingThreshold, writer.uint32(10).fork()).ldelim();
        }
        if (message.endBlockerLimit !== BigInt(0)) {
            writer.uint32(16).int64(message.endBlockerLimit);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            defaultVotingThreshold: isSet(object.defaultVotingThreshold) ? Threshold.fromJSON(object.defaultVotingThreshold) : undefined,
            endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.defaultVotingThreshold = object.defaultVotingThreshold !== undefined && object.defaultVotingThreshold !== null ? Threshold.fromPartial(object.defaultVotingThreshold) : undefined;
        message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.default_voting_threshold !== undefined && object.default_voting_threshold !== null) {
            message.defaultVotingThreshold = Threshold.fromAmino(object.default_voting_threshold);
        }
        if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
            message.endBlockerLimit = BigInt(object.end_blocker_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.default_voting_threshold = message.defaultVotingThreshold ? Threshold.toAmino(message.defaultVotingThreshold) : undefined;
        obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.vote.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map