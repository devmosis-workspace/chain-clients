import { DecCoin } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool } from "./distribution";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseDelegatorWithdrawInfo() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
export const DelegatorWithdrawInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
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
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorWithdrawInfo();
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
        return DelegatorWithdrawInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorWithdrawInfo",
            value: DelegatorWithdrawInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorWithdrawInfo.decode(message.value);
    },
    toProto(message) {
        return DelegatorWithdrawInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
            value: DelegatorWithdrawInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validatorAddress: "",
        outstandingRewards: []
    };
}
export const ValidatorOutstandingRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.outstandingRewards = object.outstandingRewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.outstandingRewards = object.outstanding_rewards?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        if (message.outstandingRewards) {
            obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
            value: ValidatorOutstandingRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorOutstandingRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorOutstandingRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
            value: ValidatorOutstandingRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validatorAddress: "",
        accumulated: ValidatorAccumulatedCommission.fromPartial({})
    };
}
export const ValidatorAccumulatedCommissionRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = ValidatorAccumulatedCommission.fromAmino(object.accumulated);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
            value: ValidatorAccumulatedCommissionRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorAccumulatedCommissionRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorAccumulatedCommissionRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
            value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validatorAddress: "",
        period: BigInt(0),
        rewards: ValidatorHistoricalRewards.fromPartial({})
    };
}
export const ValidatorHistoricalRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
            rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorHistoricalRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
            value: ValidatorHistoricalRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorHistoricalRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorHistoricalRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
            value: ValidatorHistoricalRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validatorAddress: "",
        rewards: ValidatorCurrentRewards.fromPartial({})
    };
}
export const ValidatorCurrentRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorCurrentRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorCurrentRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
            value: ValidatorCurrentRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorCurrentRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorCurrentRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
            value: ValidatorCurrentRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        startingInfo: DelegatorStartingInfo.fromPartial({})
    };
}
export const DelegatorStartingInfoRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingInfo: isSet(object.startingInfo) ? DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.starting_info !== undefined && object.starting_info !== null) {
            message.startingInfo = DelegatorStartingInfo.fromAmino(object.starting_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toAmino(message.startingInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorStartingInfoRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfoRecord",
            value: DelegatorStartingInfoRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorStartingInfoRecord.decode(message.value);
    },
    toProto(message) {
        return DelegatorStartingInfoRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
            value: DelegatorStartingInfoRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEventRecord() {
    return {
        validatorAddress: "",
        height: BigInt(0),
        period: BigInt(0),
        validatorSlashEvent: ValidatorSlashEvent.fromPartial({})
    };
}
export const ValidatorSlashEventRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
            validatorSlashEvent: isSet(object.validatorSlashEvent) ? ValidatorSlashEvent.fromJSON(object.validatorSlashEvent) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEventRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        if (object.validator_slash_event !== undefined && object.validator_slash_event !== null) {
            message.validatorSlashEvent = ValidatorSlashEvent.fromAmino(object.validator_slash_event);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSlashEventRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEventRecord",
            value: ValidatorSlashEventRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEventRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEventRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
            value: ValidatorSlashEventRecord.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        feePool: FeePool.fromPartial({}),
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            feePool: isSet(object.feePool) ? FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object?.delegatorWithdrawInfos) ? object.delegatorWithdrawInfos.map((e) => DelegatorWithdrawInfo.fromJSON(e)) : [],
            previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
            validatorAccumulatedCommissions: Array.isArray(object?.validatorAccumulatedCommissions) ? object.validatorAccumulatedCommissions.map((e) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
            validatorHistoricalRewards: Array.isArray(object?.validatorHistoricalRewards) ? object.validatorHistoricalRewards.map((e) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
            validatorCurrentRewards: Array.isArray(object?.validatorCurrentRewards) ? object.validatorCurrentRewards.map((e) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
            delegatorStartingInfos: Array.isArray(object?.delegatorStartingInfos) ? object.delegatorStartingInfos.map((e) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
            validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e) => ValidatorSlashEventRecord.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
        message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
        message.previousProposer = object.previousProposer ?? "";
        message.outstandingRewards = object.outstandingRewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.feePool = FeePool.fromAmino(object.fee_pool);
        }
        message.delegatorWithdrawInfos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromAmino(e)) || [];
        if (object.previous_proposer !== undefined && object.previous_proposer !== null) {
            message.previousProposer = object.previous_proposer;
        }
        message.outstandingRewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromAmino(e)) || [];
        message.validatorAccumulatedCommissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromAmino(e)) || [];
        message.validatorHistoricalRewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromAmino(e)) || [];
        message.validatorCurrentRewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromAmino(e)) || [];
        message.delegatorStartingInfos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromAmino(e)) || [];
        message.validatorSlashEvents = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.fee_pool = message.feePool ? FeePool.toAmino(message.feePool) : undefined;
        if (message.delegatorWithdrawInfos) {
            obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        obj.previous_proposer = message.previousProposer;
        if (message.outstandingRewards) {
            obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map