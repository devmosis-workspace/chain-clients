import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseParams() {
    return {
        externalChainVotingInflationRate: new Uint8Array(),
        keyMgmtRelativeInflationRate: new Uint8Array()
    };
}
export const Params = {
    typeUrl: "/axelar.reward.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.externalChainVotingInflationRate.length !== 0) {
            writer.uint32(10).bytes(message.externalChainVotingInflationRate);
        }
        if (message.keyMgmtRelativeInflationRate.length !== 0) {
            writer.uint32(18).bytes(message.keyMgmtRelativeInflationRate);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            externalChainVotingInflationRate: isSet(object.externalChainVotingInflationRate) ? bytesFromBase64(object.externalChainVotingInflationRate) : new Uint8Array(),
            keyMgmtRelativeInflationRate: isSet(object.keyMgmtRelativeInflationRate) ? bytesFromBase64(object.keyMgmtRelativeInflationRate) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.externalChainVotingInflationRate = object.externalChainVotingInflationRate ?? new Uint8Array();
        message.keyMgmtRelativeInflationRate = object.keyMgmtRelativeInflationRate ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.external_chain_voting_inflation_rate !== undefined && object.external_chain_voting_inflation_rate !== null) {
            message.externalChainVotingInflationRate = bytesFromBase64(object.external_chain_voting_inflation_rate);
        }
        if (object.key_mgmt_relative_inflation_rate !== undefined && object.key_mgmt_relative_inflation_rate !== null) {
            message.keyMgmtRelativeInflationRate = bytesFromBase64(object.key_mgmt_relative_inflation_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.external_chain_voting_inflation_rate = message.externalChainVotingInflationRate ? base64FromBytes(message.externalChainVotingInflationRate) : undefined;
        obj.key_mgmt_relative_inflation_rate = message.keyMgmtRelativeInflationRate ? base64FromBytes(message.keyMgmtRelativeInflationRate) : undefined;
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
            typeUrl: "/axelar.reward.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map