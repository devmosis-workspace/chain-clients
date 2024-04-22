import { Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgSetWithdrawAddress() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
export const MsgSetWithdrawAddress = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSetWithdrawAddress();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetWithdrawAddress();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdrawAddress = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.withdraw_address = message.withdrawAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetWithdrawAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgModifyWithdrawAddress",
            value: MsgSetWithdrawAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetWithdrawAddress.decode(message.value);
    },
    toProto(message) {
        return MsgSetWithdrawAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.encode(message).finish()
        };
    }
};
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
export const MsgSetWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
            value: MsgSetWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
            value: MsgSetWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegatorReward() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export const MsgWithdrawDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegatorReward();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegatorReward();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegationReward",
            value: MsgWithdrawDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return {};
}
export const MsgWithdrawDelegatorRewardResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
            value: MsgWithdrawDelegatorRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawDelegatorRewardResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
            value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawValidatorCommission() {
    return {
        validatorAddress: ""
    };
}
export const MsgWithdrawValidatorCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawValidatorCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawValidatorCommission.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawValidatorCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return {};
}
export const MsgWithdrawValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
            value: MsgWithdrawValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
            value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgFundCommunityPool() {
    return {
        amount: [],
        depositor: ""
    };
}
export const MsgFundCommunityPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            depositor: isSet(object.depositor) ? String(object.depositor) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.depositor = message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgFundCommunityPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPool",
            value: MsgFundCommunityPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgFundCommunityPool.decode(message.value);
    },
    toProto(message) {
        return MsgFundCommunityPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: MsgFundCommunityPool.encode(message).finish()
        };
    }
};
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
export const MsgFundCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgFundCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPoolResponse",
            value: MsgFundCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgFundCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgFundCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
            value: MsgFundCommunityPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map