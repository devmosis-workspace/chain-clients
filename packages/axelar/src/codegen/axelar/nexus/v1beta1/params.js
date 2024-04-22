import { Threshold } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseParams() {
    return {
        chainActivationThreshold: Threshold.fromPartial({}),
        chainMaintainerMissingVoteThreshold: Threshold.fromPartial({}),
        chainMaintainerIncorrectVoteThreshold: Threshold.fromPartial({}),
        chainMaintainerCheckWindow: 0,
        gateway: new Uint8Array(),
        endBlockerLimit: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/axelar.nexus.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chainActivationThreshold !== undefined) {
            Threshold.encode(message.chainActivationThreshold, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainMaintainerMissingVoteThreshold !== undefined) {
            Threshold.encode(message.chainMaintainerMissingVoteThreshold, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainMaintainerIncorrectVoteThreshold !== undefined) {
            Threshold.encode(message.chainMaintainerIncorrectVoteThreshold, writer.uint32(26).fork()).ldelim();
        }
        if (message.chainMaintainerCheckWindow !== 0) {
            writer.uint32(32).int32(message.chainMaintainerCheckWindow);
        }
        if (message.gateway.length !== 0) {
            writer.uint32(42).bytes(message.gateway);
        }
        if (message.endBlockerLimit !== BigInt(0)) {
            writer.uint32(48).uint64(message.endBlockerLimit);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chainActivationThreshold: isSet(object.chainActivationThreshold) ? Threshold.fromJSON(object.chainActivationThreshold) : undefined,
            chainMaintainerMissingVoteThreshold: isSet(object.chainMaintainerMissingVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerMissingVoteThreshold) : undefined,
            chainMaintainerIncorrectVoteThreshold: isSet(object.chainMaintainerIncorrectVoteThreshold) ? Threshold.fromJSON(object.chainMaintainerIncorrectVoteThreshold) : undefined,
            chainMaintainerCheckWindow: isSet(object.chainMaintainerCheckWindow) ? Number(object.chainMaintainerCheckWindow) : 0,
            gateway: isSet(object.gateway) ? bytesFromBase64(object.gateway) : new Uint8Array(),
            endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.chainActivationThreshold = object.chainActivationThreshold !== undefined && object.chainActivationThreshold !== null ? Threshold.fromPartial(object.chainActivationThreshold) : undefined;
        message.chainMaintainerMissingVoteThreshold = object.chainMaintainerMissingVoteThreshold !== undefined && object.chainMaintainerMissingVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerMissingVoteThreshold) : undefined;
        message.chainMaintainerIncorrectVoteThreshold = object.chainMaintainerIncorrectVoteThreshold !== undefined && object.chainMaintainerIncorrectVoteThreshold !== null ? Threshold.fromPartial(object.chainMaintainerIncorrectVoteThreshold) : undefined;
        message.chainMaintainerCheckWindow = object.chainMaintainerCheckWindow ?? 0;
        message.gateway = object.gateway ?? new Uint8Array();
        message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.chain_activation_threshold !== undefined && object.chain_activation_threshold !== null) {
            message.chainActivationThreshold = Threshold.fromAmino(object.chain_activation_threshold);
        }
        if (object.chain_maintainer_missing_vote_threshold !== undefined && object.chain_maintainer_missing_vote_threshold !== null) {
            message.chainMaintainerMissingVoteThreshold = Threshold.fromAmino(object.chain_maintainer_missing_vote_threshold);
        }
        if (object.chain_maintainer_incorrect_vote_threshold !== undefined && object.chain_maintainer_incorrect_vote_threshold !== null) {
            message.chainMaintainerIncorrectVoteThreshold = Threshold.fromAmino(object.chain_maintainer_incorrect_vote_threshold);
        }
        if (object.chain_maintainer_check_window !== undefined && object.chain_maintainer_check_window !== null) {
            message.chainMaintainerCheckWindow = object.chain_maintainer_check_window;
        }
        if (object.gateway !== undefined && object.gateway !== null) {
            message.gateway = bytesFromBase64(object.gateway);
        }
        if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
            message.endBlockerLimit = BigInt(object.end_blocker_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_activation_threshold = message.chainActivationThreshold ? Threshold.toAmino(message.chainActivationThreshold) : undefined;
        obj.chain_maintainer_missing_vote_threshold = message.chainMaintainerMissingVoteThreshold ? Threshold.toAmino(message.chainMaintainerMissingVoteThreshold) : undefined;
        obj.chain_maintainer_incorrect_vote_threshold = message.chainMaintainerIncorrectVoteThreshold ? Threshold.toAmino(message.chainMaintainerIncorrectVoteThreshold) : undefined;
        obj.chain_maintainer_check_window = message.chainMaintainerCheckWindow;
        obj.gateway = message.gateway ? base64FromBytes(message.gateway) : undefined;
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
            typeUrl: "/axelar.nexus.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map