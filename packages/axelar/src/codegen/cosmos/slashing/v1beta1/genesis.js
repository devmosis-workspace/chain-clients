import { Params, ValidatorSigningInfo } from "./slashing";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e) => SigningInfo.fromJSON(e)) : [],
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => ValidatorMissedBlocks.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
        message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
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
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validatorSigningInfo: ValidatorSigningInfo.fromPartial({})
    };
}
export const SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
            message.validatorSigningInfo = ValidatorSigningInfo.fromAmino(object.validator_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningInfo.decode(message.value);
    },
    toProto(message) {
        return SigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: SigningInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missedBlocks: []
    };
}
export const ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => MissedBlock.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorMissedBlocks();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.missedBlocks = object.missed_blocks?.map(e => MissedBlock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorMissedBlocks.decode(message.value);
    },
    toProto(message) {
        return ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
function createBaseMissedBlock() {
    return {
        index: BigInt(0),
        missed: false
    };
}
export const MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            missed: isSet(object.missed) ? Boolean(object.missed) : false
        };
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.missed = object.missed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMissedBlock();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.missed = message.missed;
        return obj;
    },
    fromAminoMsg(object) {
        return MissedBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MissedBlock.decode(message.value);
    },
    toProto(message) {
        return MissedBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: MissedBlock.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map