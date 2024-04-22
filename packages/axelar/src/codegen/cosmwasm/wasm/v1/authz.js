import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseContractExecutionAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        grants: []
    };
}
export const ContractExecutionAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => ContractGrant.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseContractExecutionAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractExecutionAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ContractExecutionAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractExecutionAuthorization",
            value: ContractExecutionAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContractExecutionAuthorization.decode(message.value);
    },
    toProto(message) {
        return ContractExecutionAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
            value: ContractExecutionAuthorization.encode(message).finish()
        };
    }
};
function createBaseContractMigrationAuthorization() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        grants: []
    };
}
export const ContractMigrationAuthorization = {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.grants) {
            ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => ContractGrant.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseContractMigrationAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractMigrationAuthorization();
        message.grants = object.grants?.map(e => ContractGrant.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ContractMigrationAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractMigrationAuthorization",
            value: ContractMigrationAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContractMigrationAuthorization.decode(message.value);
    },
    toProto(message) {
        return ContractMigrationAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
            value: ContractMigrationAuthorization.encode(message).finish()
        };
    }
};
function createBaseContractGrant() {
    return {
        contract: "",
        limit: undefined,
        filter: undefined
    };
}
export const ContractGrant = {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            contract: isSet(object.contract) ? String(object.contract) : "",
            limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
            filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseContractGrant();
        message.contract = object.contract ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? Any.fromPartial(object.limit) : undefined;
        message.filter = object.filter !== undefined && object.filter !== null ? Any.fromPartial(object.filter) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractGrant();
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino(object.limit);
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino(object.filter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract;
        obj.limit = message.limit ? Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino(message.limit) : undefined;
        obj.filter = message.filter ? Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino(message.filter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractGrant",
            value: ContractGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContractGrant.decode(message.value);
    },
    toProto(message) {
        return ContractGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
            value: ContractGrant.encode(message).finish()
        };
    }
};
function createBaseMaxCallsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        remaining: BigInt(0)
    };
}
export const MaxCallsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.remaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            remaining: isSet(object.remaining) ? BigInt(object.remaining.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseMaxCallsLimit();
        message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMaxCallsLimit();
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = BigInt(object.remaining);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.remaining = message.remaining ? message.remaining.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MaxCallsLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MaxCallsLimit",
            value: MaxCallsLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MaxCallsLimit.decode(message.value);
    },
    toProto(message) {
        return MaxCallsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
            value: MaxCallsLimit.encode(message).finish()
        };
    }
};
function createBaseMaxFundsLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        amounts: []
    };
}
export const MaxFundsLimit = {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            amounts: Array.isArray(object?.amounts) ? object.amounts.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMaxFundsLimit();
        message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMaxFundsLimit();
        message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amounts) {
            obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MaxFundsLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MaxFundsLimit",
            value: MaxFundsLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MaxFundsLimit.decode(message.value);
    },
    toProto(message) {
        return MaxFundsLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
            value: MaxFundsLimit.encode(message).finish()
        };
    }
};
function createBaseCombinedLimit() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        callsRemaining: BigInt(0),
        amounts: []
    };
}
export const CombinedLimit = {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.callsRemaining !== BigInt(0)) {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            callsRemaining: isSet(object.callsRemaining) ? BigInt(object.callsRemaining.toString()) : BigInt(0),
            amounts: Array.isArray(object?.amounts) ? object.amounts.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCombinedLimit();
        message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
        message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCombinedLimit();
        if (object.calls_remaining !== undefined && object.calls_remaining !== null) {
            message.callsRemaining = BigInt(object.calls_remaining);
        }
        message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.calls_remaining = message.callsRemaining ? message.callsRemaining.toString() : undefined;
        if (message.amounts) {
            obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CombinedLimit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CombinedLimit",
            value: CombinedLimit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CombinedLimit.decode(message.value);
    },
    toProto(message) {
        return CombinedLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
            value: CombinedLimit.encode(message).finish()
        };
    }
};
function createBaseAllowAllMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
    };
}
export const AllowAllMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return AllowAllMessagesFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AllowAllMessagesFilter",
            value: AllowAllMessagesFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllowAllMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return AllowAllMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
            value: AllowAllMessagesFilter.encode(message).finish()
        };
    }
};
function createBaseAcceptedMessageKeysFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        keys: []
    };
}
export const AcceptedMessageKeysFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AcceptedMessageKeysFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AcceptedMessageKeysFilter",
            value: AcceptedMessageKeysFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AcceptedMessageKeysFilter.decode(message.value);
    },
    toProto(message) {
        return AcceptedMessageKeysFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
            value: AcceptedMessageKeysFilter.encode(message).finish()
        };
    }
};
function createBaseAcceptedMessagesFilter() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        messages: []
    };
}
export const AcceptedMessagesFilter = {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseAcceptedMessagesFilter();
        message.messages = object.messages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcceptedMessagesFilter();
        message.messages = object.messages?.map(e => toUtf8(JSON.stringify(e))) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => JSON.parse(fromUtf8(e)));
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AcceptedMessagesFilter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AcceptedMessagesFilter",
            value: AcceptedMessagesFilter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AcceptedMessagesFilter.decode(message.value);
    },
    toProto(message) {
        return AcceptedMessagesFilter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
            value: AcceptedMessagesFilter.encode(message).finish()
        };
    }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmwasm.wasm.v1.MaxCallsLimit":
            return MaxCallsLimit.decode(data.value);
        case "/cosmwasm.wasm.v1.MaxFundsLimit":
            return MaxFundsLimit.decode(data.value);
        case "/cosmwasm.wasm.v1.CombinedLimit":
            return CombinedLimit.decode(data.value);
        default:
            return data;
    }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino = (content) => {
    switch (content.type) {
        case "wasm/MaxCallsLimit":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
                value: MaxCallsLimit.encode(MaxCallsLimit.fromPartial(MaxCallsLimit.fromAmino(content.value))).finish()
            });
        case "wasm/MaxFundsLimit":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                value: MaxFundsLimit.encode(MaxFundsLimit.fromPartial(MaxFundsLimit.fromAmino(content.value))).finish()
            });
        case "wasm/CombinedLimit":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
                value: CombinedLimit.encode(CombinedLimit.fromPartial(CombinedLimit.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmwasm.wasm.v1.MaxCallsLimit":
            return {
                type: "wasm/MaxCallsLimit",
                value: MaxCallsLimit.toAmino(MaxCallsLimit.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.MaxFundsLimit":
            return {
                type: "wasm/MaxFundsLimit",
                value: MaxFundsLimit.toAmino(MaxFundsLimit.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.CombinedLimit":
            return {
                type: "wasm/CombinedLimit",
                value: CombinedLimit.toAmino(CombinedLimit.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
            return AllowAllMessagesFilter.decode(data.value);
        case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
            return AcceptedMessageKeysFilter.decode(data.value);
        case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
            return AcceptedMessagesFilter.decode(data.value);
        default:
            return data;
    }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino = (content) => {
    switch (content.type) {
        case "wasm/AllowAllMessagesFilter":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
                value: AllowAllMessagesFilter.encode(AllowAllMessagesFilter.fromPartial(AllowAllMessagesFilter.fromAmino(content.value))).finish()
            });
        case "wasm/AcceptedMessageKeysFilter":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                value: AcceptedMessageKeysFilter.encode(AcceptedMessageKeysFilter.fromPartial(AcceptedMessageKeysFilter.fromAmino(content.value))).finish()
            });
        case "wasm/AcceptedMessagesFilter":
            return Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
                value: AcceptedMessagesFilter.encode(AcceptedMessagesFilter.fromPartial(AcceptedMessagesFilter.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
            return {
                type: "wasm/AllowAllMessagesFilter",
                value: AllowAllMessagesFilter.toAmino(AllowAllMessagesFilter.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
            return {
                type: "wasm/AcceptedMessageKeysFilter",
                value: AcceptedMessageKeysFilter.toAmino(AcceptedMessageKeysFilter.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
            return {
                type: "wasm/AcceptedMessagesFilter",
                value: AcceptedMessagesFilter.toAmino(AcceptedMessagesFilter.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=authz.js.map