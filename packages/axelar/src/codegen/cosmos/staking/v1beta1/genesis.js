import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.staking.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        for (const v of message.lastValidatorPowers) {
            LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbondingDelegations) {
            UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
            lastValidatorPowers: Array.isArray(object?.lastValidatorPowers) ? object.lastValidatorPowers.map((e) => LastValidatorPower.fromJSON(e)) : [],
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromJSON(e)) : [],
            unbondingDelegations: Array.isArray(object?.unbondingDelegations) ? object.unbondingDelegations.map((e) => UnbondingDelegation.fromJSON(e)) : [],
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => Redelegation.fromJSON(e)) : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
        message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
        message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
        message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
        message.exported = object.exported ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.last_total_power !== undefined && object.last_total_power !== null) {
            message.lastTotalPower = bytesFromBase64(object.last_total_power);
        }
        message.lastValidatorPowers = object.last_validator_powers?.map(e => LastValidatorPower.fromAmino(e)) || [];
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
        message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
        message.redelegations = object.redelegations?.map(e => Redelegation.fromAmino(e)) || [];
        if (object.exported !== undefined && object.exported !== null) {
            message.exported = object.exported;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.last_total_power = message.lastTotalPower ? base64FromBytes(message.lastTotalPower) : undefined;
        if (message.lastValidatorPowers) {
            obj.last_validator_powers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbondingDelegations) {
            obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        obj.exported = message.exported;
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
            typeUrl: "/cosmos.staking.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: BigInt(0)
    };
}
export const LastValidatorPower = {
    typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseLastValidatorPower();
        message.address = object.address ?? "";
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLastValidatorPower();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LastValidatorPower.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LastValidatorPower",
            value: LastValidatorPower.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LastValidatorPower.decode(message.value);
    },
    toProto(message) {
        return LastValidatorPower.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
            value: LastValidatorPower.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map