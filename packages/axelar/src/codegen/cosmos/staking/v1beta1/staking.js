import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
/** BondStatus is the status of a validator. */
export var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));
export const BondStatusSDKType = BondStatus;
export const BondStatusAmino = BondStatus;
export function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
export function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseHistoricalInfo() {
    return {
        header: Header.fromPartial({}),
        valset: []
    };
}
export const HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => Validator.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHistoricalInfo();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        message.valset = object.valset?.map(e => Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: HistoricalInfo.encode(message).finish()
        };
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
export const CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.maxRate, 18).atomics);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            rate: isSet(object.rate) ? String(object.rate) : "",
            maxRate: isSet(object.maxRate) ? String(object.maxRate) : "",
            maxChangeRate: isSet(object.maxChangeRate) ? String(object.maxChangeRate) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.maxRate = object.maxRate ?? "";
        message.maxChangeRate = object.maxChangeRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommissionRates();
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        if (object.max_rate !== undefined && object.max_rate !== null) {
            message.maxRate = object.max_rate;
        }
        if (object.max_change_rate !== undefined && object.max_change_rate !== null) {
            message.maxChangeRate = object.max_change_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate;
        obj.max_rate = message.maxRate;
        obj.max_change_rate = message.maxChangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommissionRates.decode(message.value);
    },
    toProto(message) {
        return CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: CommissionRates.encode(message).finish()
        };
    }
};
function createBaseCommission() {
    return {
        commissionRates: CommissionRates.fromPartial({}),
        updateTime: Timestamp.fromPartial({})
    };
}
export const Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    encode(message, writer = BinaryWriter.create()) {
        if (message.commissionRates !== undefined) {
            CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            Timestamp.encode(message.updateTime, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            commissionRates: isSet(object.commissionRates) ? CommissionRates.fromJSON(object.commissionRates) : undefined,
            updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
        message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Timestamp.fromPartial(object.updateTime) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommission();
        if (object.commission_rates !== undefined && object.commission_rates !== null) {
            message.commissionRates = CommissionRates.fromAmino(object.commission_rates);
        }
        if (object.update_time !== undefined && object.update_time !== null) {
            message.updateTime = Timestamp.fromAmino(object.update_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commissionRates ? CommissionRates.toAmino(message.commissionRates) : undefined;
        obj.update_time = message.updateTime ? Timestamp.toAmino(message.updateTime) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Commission.decode(message.value);
    },
    toProto(message) {
        return Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: Commission.encode(message).finish()
        };
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
export const Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    encode(message, writer = BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
            details: isSet(object.details) ? String(object.details) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.securityContact = object.securityContact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescription();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        if (object.security_contact !== undefined && object.security_contact !== null) {
            message.securityContact = object.security_contact;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.securityContact;
        obj.details = message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Description.decode(message.value);
    },
    toProto(message) {
        return Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: Description.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: Description.fromPartial({}),
        unbondingHeight: BigInt(0),
        unbondingTime: Timestamp.fromPartial({}),
        commission: Commission.fromPartial({}),
        minSelfDelegation: ""
    };
}
export const Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== BigInt(0)) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            Timestamp.encode(message.unbondingTime, writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            unbondingHeight: isSet(object.unbondingHeight) ? BigInt(object.unbondingHeight.toString()) : BigInt(0),
            unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
            commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Timestamp.fromPartial(object.unbondingTime) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operatorAddress = object.operator_address;
        }
        if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
            message.consensusPubkey = encodePubkey(object.consensus_pubkey);
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = bondStatusFromJSON(object.status);
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = object.tokens;
        }
        if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
            message.delegatorShares = object.delegator_shares;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = Description.fromAmino(object.description);
        }
        if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
            message.unbondingHeight = BigInt(object.unbonding_height);
        }
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = Timestamp.fromAmino(object.unbonding_time);
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = Commission.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        obj.consensus_pubkey = message.consensusPubkey ? decodePubkey(message.consensusPubkey) : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime ? Timestamp.toAmino(message.unbondingTime) : undefined;
        obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
export const ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValAddresses.decode(message.value);
    },
    toProto(message) {
        return ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: ValAddresses.encode(message).finish()
        };
    }
};
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export const DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
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
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPair();
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
        return DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPair.decode(message.value);
    },
    toProto(message) {
        return DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: DVPair.encode(message).finish()
        };
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
export const DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pairs) {
            DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => DVPair.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => DVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPairs.decode(message.value);
    },
    toProto(message) {
        return DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: DVPairs.encode(message).finish()
        };
    }
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
export const DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
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
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplet();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: DVVTriplet.encode(message).finish()
        };
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
export const DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.triplets) {
            DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => DVVTriplet.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => DVVTriplet.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: DVVTriplets.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
export const Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            shares: isSet(object.shares) ? String(object.shares) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = object.shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.shares = message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Delegation.decode(message.value);
    },
    toProto(message) {
        return Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: Delegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
export const UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => UnbondingDelegationEntry.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: UnbondingDelegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: Timestamp.fromPartial({}),
        initialBalance: "",
        balance: ""
    };
}
export const UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = Timestamp.fromAmino(object.completion_time);
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
        obj.initial_balance = message.initialBalance;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: Timestamp.fromPartial({}),
        initialBalance: "",
        sharesDst: ""
    };
}
export const RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.sharesDst, 18).atomics);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.sharesDst = object.sharesDst ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = Timestamp.fromAmino(object.completion_time);
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.shares_dst !== undefined && object.shares_dst !== null) {
            message.sharesDst = object.shares_dst;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
        obj.initial_balance = message.initialBalance;
        obj.shares_dst = message.sharesDst;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: RedelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
export const Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
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
        for (const v of message.entries) {
            RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntry.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        message.entries = object.entries?.map(e => RedelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Redelegation.decode(message.value);
    },
    toProto(message) {
        return Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: Redelegation.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        unbondingTime: Duration.fromPartial({}),
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: ""
    };
}
export const Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.unbondingTime !== undefined) {
            Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            unbondingTime: isSet(object.unbondingTime) ? Duration.fromJSON(object.unbondingTime) : undefined,
            maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
            maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
            historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
            bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = Duration.fromAmino(object.unbonding_time);
        }
        if (object.max_validators !== undefined && object.max_validators !== null) {
            message.maxValidators = object.max_validators;
        }
        if (object.max_entries !== undefined && object.max_entries !== null) {
            message.maxEntries = object.max_entries;
        }
        if (object.historical_entries !== undefined && object.historical_entries !== null) {
            message.historicalEntries = object.historical_entries;
        }
        if (object.bond_denom !== undefined && object.bond_denom !== null) {
            message.bondDenom = object.bond_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbondingTime ? Duration.toAmino(message.unbondingTime) : undefined;
        obj.max_validators = message.maxValidators;
        obj.max_entries = message.maxEntries;
        obj.historical_entries = message.historicalEntries;
        obj.bond_denom = message.bondDenom;
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
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: Delegation.fromPartial({}),
        balance: Coin.fromPartial({})
    };
}
export const DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
            balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationResponse();
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = Delegation.fromAmino(object.delegation);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : undefined;
        obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: DelegationResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
export const RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.redelegationEntry !== undefined) {
            RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            redelegationEntry: isSet(object.redelegationEntry) ? RedelegationEntry.fromJSON(object.redelegationEntry) : undefined,
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntryResponse();
        if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
            message.redelegationEntry = RedelegationEntry.fromAmino(object.redelegation_entry);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toAmino(message.redelegationEntry) : undefined;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: RedelegationEntryResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: Redelegation.fromPartial({}),
        entries: []
    };
}
export const RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntryResponse.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationResponse();
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = Redelegation.fromAmino(object.redelegation);
        }
        message.entries = object.entries?.map(e => RedelegationEntryResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : undefined;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: RedelegationResponse.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
export const Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
            bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : ""
        };
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? "";
        message.bondedTokens = object.bondedTokens ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.not_bonded_tokens !== undefined && object.not_bonded_tokens !== null) {
            message.notBondedTokens = object.not_bonded_tokens;
        }
        if (object.bonded_tokens !== undefined && object.bonded_tokens !== null) {
            message.bondedTokens = object.bonded_tokens;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.notBondedTokens;
        obj.bonded_tokens = message.bondedTokens;
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: Pool.encode(message).finish()
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
//# sourceMappingURL=staking.js.map