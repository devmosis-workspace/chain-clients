import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";
function createBaseMsgCreateValidator() {
    return {
        description: Description.fromPartial({}),
        commission: CommissionRates.fromPartial({}),
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        value: Coin.fromPartial({})
    };
}
export const MsgCreateValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateValidator();
        if (object.description !== undefined && object.description !== null) {
            message.description = Description.fromAmino(object.description);
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = CommissionRates.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = encodePubkey(object.pubkey);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Coin.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation;
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
        obj.value = message.value ? Coin.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidator",
            value: MsgCreateValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateValidator.decode(message.value);
    },
    toProto(message) {
        return MsgCreateValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: MsgCreateValidator.encode(message).finish()
        };
    }
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
export const MsgCreateValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidatorResponse",
            value: MsgCreateValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
            value: MsgCreateValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidator() {
    return {
        description: Description.fromPartial({}),
        validatorAddress: "",
        commissionRate: "",
        minSelfDelegation: ""
    };
}
export const MsgEditValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.validatorAddress = object.validatorAddress ?? "";
        message.commissionRate = object.commissionRate ?? "";
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEditValidator();
        if (object.description !== undefined && object.description !== null) {
            message.description = Description.fromAmino(object.description);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.commission_rate !== undefined && object.commission_rate !== null) {
            message.commissionRate = object.commission_rate;
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.validator_address = message.validatorAddress;
        obj.commission_rate = message.commissionRate;
        obj.min_self_delegation = message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEditValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidator",
            value: MsgEditValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEditValidator.decode(message.value);
    },
    toProto(message) {
        return MsgEditValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: MsgEditValidator.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
export const MsgEditValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEditValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidatorResponse",
            value: MsgEditValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEditValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEditValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
            value: MsgEditValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgDelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgDelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegate",
            value: MsgDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegate.decode(message.value);
    },
    toProto(message) {
        return MsgDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: MsgDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateResponse() {
    return {};
}
export const MsgDelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgDelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegateResponse",
            value: MsgDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
            value: MsgDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegate() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBeginRedelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginRedelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginRedelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegate",
            value: MsgBeginRedelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginRedelegate.decode(message.value);
    },
    toProto(message) {
        return MsgBeginRedelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: MsgBeginRedelegate.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegateResponse() {
    return {
        completionTime: Timestamp.fromPartial({})
    };
}
export const MsgBeginRedelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = Timestamp.fromAmino(object.completion_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginRedelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegateResponse",
            value: MsgBeginRedelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginRedelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginRedelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
            value: MsgBeginRedelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgUndelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegate",
            value: MsgUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegate.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: MsgUndelegate.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateResponse() {
    return {
        completionTime: Timestamp.fromPartial({})
    };
}
export const MsgUndelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateResponse();
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateResponse();
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = Timestamp.fromAmino(object.completion_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegateResponse",
            value: MsgUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
            value: MsgUndelegateResponse.encode(message).finish()
        };
    }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return decodePubkey(content);
};
//# sourceMappingURL=tx.js.map