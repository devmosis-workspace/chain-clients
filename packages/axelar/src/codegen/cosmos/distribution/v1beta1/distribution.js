import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false
    };
}
export const Params = {
    typeUrl: "/cosmos.distribution.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.communityTax !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.communityTax, 18).atomics);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.baseProposerReward, 18).atomics);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.bonusProposerReward, 18).atomics);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
            baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
            bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
            withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.communityTax = object.communityTax ?? "";
        message.baseProposerReward = object.baseProposerReward ?? "";
        message.bonusProposerReward = object.bonusProposerReward ?? "";
        message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.community_tax !== undefined && object.community_tax !== null) {
            message.communityTax = object.community_tax;
        }
        if (object.base_proposer_reward !== undefined && object.base_proposer_reward !== null) {
            message.baseProposerReward = object.base_proposer_reward;
        }
        if (object.bonus_proposer_reward !== undefined && object.bonus_proposer_reward !== null) {
            message.bonusProposerReward = object.bonus_proposer_reward;
        }
        if (object.withdraw_addr_enabled !== undefined && object.withdraw_addr_enabled !== null) {
            message.withdrawAddrEnabled = object.withdraw_addr_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.community_tax = message.communityTax;
        obj.base_proposer_reward = message.baseProposerReward;
        obj.bonus_proposer_reward = message.bonusProposerReward;
        obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0
    };
}
export const ValidatorHistoricalRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.cumulativeRewardRatio) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            cumulativeRewardRatio: Array.isArray(object?.cumulativeRewardRatio) ? object.cumulativeRewardRatio.map((e) => DecCoin.fromJSON(e)) : [],
            referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = object.cumulative_reward_ratio?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.reference_count !== undefined && object.reference_count !== null) {
            message.referenceCount = object.reference_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulativeRewardRatio) {
            obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        obj.reference_count = message.referenceCount;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorHistoricalRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewards",
            value: ValidatorHistoricalRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: BigInt(0)
    };
}
export const ValidatorCurrentRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : [],
            period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorCurrentRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewards",
            value: ValidatorCurrentRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
export const ValidatorAccumulatedCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorAccumulatedCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommission",
            value: ValidatorAccumulatedCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
export const ValidatorOutstandingRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorOutstandingRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewards",
            value: ValidatorOutstandingRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: BigInt(0),
        fraction: ""
    };
}
export const ValidatorSlashEvent = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.fraction, 18).atomics);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorPeriod: isSet(object.validatorPeriod) ? BigInt(object.validatorPeriod.toString()) : BigInt(0),
            fraction: isSet(object.fraction) ? String(object.fraction) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt(0);
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEvent();
        if (object.validator_period !== undefined && object.validator_period !== null) {
            message.validatorPeriod = BigInt(object.validator_period);
        }
        if (object.fraction !== undefined && object.fraction !== null) {
            message.fraction = object.fraction;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_period = message.validatorPeriod ? message.validatorPeriod.toString() : undefined;
        obj.fraction = message.fraction;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSlashEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvent",
            value: ValidatorSlashEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: ValidatorSlashEvent.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: []
    };
}
export const ValidatorSlashEvents = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e) => ValidatorSlashEvent.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = object.validator_slash_events?.map(e => ValidatorSlashEvent.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validatorSlashEvents) {
            obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSlashEvents.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvents",
            value: ValidatorSlashEvents.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: ValidatorSlashEvents.encode(message).finish()
        };
    }
};
function createBaseFeePool() {
    return {
        communityPool: []
    };
}
export const FeePool = {
    typeUrl: "/cosmos.distribution.v1beta1.FeePool",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.communityPool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            communityPool: Array.isArray(object?.communityPool) ? object.communityPool.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeePool();
        message.communityPool = object.community_pool?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.communityPool) {
            obj.community_pool = message.communityPool.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeePool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeePool",
            value: FeePool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FeePool.decode(message.value);
    },
    toProto(message) {
        return FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: FeePool.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposal() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
export const CommunityPoolSpendProposal = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommunityPoolSpendProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CommunityPoolSpendProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: BigInt(0),
        stake: "",
        height: BigInt(0)
    };
}
export const DelegatorStartingInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.previousPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.stake, 18).atomics);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            previousPeriod: isSet(object.previousPeriod) ? BigInt(object.previousPeriod.toString()) : BigInt(0),
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorStartingInfo();
        if (object.previous_period !== undefined && object.previous_period !== null) {
            message.previousPeriod = BigInt(object.previous_period);
        }
        if (object.stake !== undefined && object.stake !== null) {
            message.stake = object.stake;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.previous_period = message.previousPeriod ? message.previousPeriod.toString() : undefined;
        obj.stake = message.stake;
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorStartingInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfo",
            value: DelegatorStartingInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: DelegatorStartingInfo.encode(message).finish()
        };
    }
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: []
    };
}
export const DelegationDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = object.validatorAddress ?? "";
        message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationDelegatorReward();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.reward = object.reward?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationDelegatorReward",
            value: DelegationDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: DelegationDelegatorReward.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
export const CommunityPoolSpendProposalWithDeposit = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        obj.amount = message.amount;
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
            value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=distribution.js.map