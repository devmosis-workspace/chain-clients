import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryValidatorsResponse() {
    return {
        validators: []
    };
}
export const QueryValidatorsResponse = {
    typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validators) {
            QueryValidatorsResponse_Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => QueryValidatorsResponse_Validator.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => QueryValidatorsResponse_Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => QueryValidatorsResponse_Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? QueryValidatorsResponse_Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse",
            value: QueryValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse_TssIllegibilityInfo() {
    return {
        tombstoned: false,
        jailed: false,
        missedTooManyBlocks: false,
        noProxyRegistered: false,
        tssSuspended: false,
        proxyInsuficientFunds: false,
        staleTssHeartbeat: false
    };
}
export const QueryValidatorsResponse_TssIllegibilityInfo = {
    typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tombstoned === true) {
            writer.uint32(8).bool(message.tombstoned);
        }
        if (message.jailed === true) {
            writer.uint32(16).bool(message.jailed);
        }
        if (message.missedTooManyBlocks === true) {
            writer.uint32(24).bool(message.missedTooManyBlocks);
        }
        if (message.noProxyRegistered === true) {
            writer.uint32(32).bool(message.noProxyRegistered);
        }
        if (message.tssSuspended === true) {
            writer.uint32(40).bool(message.tssSuspended);
        }
        if (message.proxyInsuficientFunds === true) {
            writer.uint32(48).bool(message.proxyInsuficientFunds);
        }
        if (message.staleTssHeartbeat === true) {
            writer.uint32(56).bool(message.staleTssHeartbeat);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            missedTooManyBlocks: isSet(object.missedTooManyBlocks) ? Boolean(object.missedTooManyBlocks) : false,
            noProxyRegistered: isSet(object.noProxyRegistered) ? Boolean(object.noProxyRegistered) : false,
            tssSuspended: isSet(object.tssSuspended) ? Boolean(object.tssSuspended) : false,
            proxyInsuficientFunds: isSet(object.proxyInsuficientFunds) ? Boolean(object.proxyInsuficientFunds) : false,
            staleTssHeartbeat: isSet(object.staleTssHeartbeat) ? Boolean(object.staleTssHeartbeat) : false
        };
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
        message.tombstoned = object.tombstoned ?? false;
        message.jailed = object.jailed ?? false;
        message.missedTooManyBlocks = object.missedTooManyBlocks ?? false;
        message.noProxyRegistered = object.noProxyRegistered ?? false;
        message.tssSuspended = object.tssSuspended ?? false;
        message.proxyInsuficientFunds = object.proxyInsuficientFunds ?? false;
        message.staleTssHeartbeat = object.staleTssHeartbeat ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
        if (object.tombstoned !== undefined && object.tombstoned !== null) {
            message.tombstoned = object.tombstoned;
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        if (object.missed_too_many_blocks !== undefined && object.missed_too_many_blocks !== null) {
            message.missedTooManyBlocks = object.missed_too_many_blocks;
        }
        if (object.no_proxy_registered !== undefined && object.no_proxy_registered !== null) {
            message.noProxyRegistered = object.no_proxy_registered;
        }
        if (object.tss_suspended !== undefined && object.tss_suspended !== null) {
            message.tssSuspended = object.tss_suspended;
        }
        if (object.proxy_insuficient_funds !== undefined && object.proxy_insuficient_funds !== null) {
            message.proxyInsuficientFunds = object.proxy_insuficient_funds;
        }
        if (object.stale_tss_heartbeat !== undefined && object.stale_tss_heartbeat !== null) {
            message.staleTssHeartbeat = object.stale_tss_heartbeat;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tombstoned = message.tombstoned;
        obj.jailed = message.jailed;
        obj.missed_too_many_blocks = message.missedTooManyBlocks;
        obj.no_proxy_registered = message.noProxyRegistered;
        obj.tss_suspended = message.tssSuspended;
        obj.proxy_insuficient_funds = message.proxyInsuficientFunds;
        obj.stale_tss_heartbeat = message.staleTssHeartbeat;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsResponse_TssIllegibilityInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValidatorsResponse_TssIllegibilityInfo.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsResponse_TssIllegibilityInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo",
            value: QueryValidatorsResponse_TssIllegibilityInfo.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse_Validator() {
    return {
        operatorAddress: "",
        moniker: "",
        tssIllegibilityInfo: QueryValidatorsResponse_TssIllegibilityInfo.fromPartial({})
    };
}
export const QueryValidatorsResponse_Validator = {
    typeUrl: "/axelar.snapshot.v1beta1.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.tssIllegibilityInfo !== undefined) {
            QueryValidatorsResponse_TssIllegibilityInfo.encode(message.tssIllegibilityInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            tssIllegibilityInfo: isSet(object.tssIllegibilityInfo) ? QueryValidatorsResponse_TssIllegibilityInfo.fromJSON(object.tssIllegibilityInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse_Validator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.moniker = object.moniker ?? "";
        message.tssIllegibilityInfo = object.tssIllegibilityInfo !== undefined && object.tssIllegibilityInfo !== null ? QueryValidatorsResponse_TssIllegibilityInfo.fromPartial(object.tssIllegibilityInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorsResponse_Validator();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operatorAddress = object.operator_address;
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.tss_illegibility_info !== undefined && object.tss_illegibility_info !== null) {
            message.tssIllegibilityInfo = QueryValidatorsResponse_TssIllegibilityInfo.fromAmino(object.tss_illegibility_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        obj.moniker = message.moniker;
        obj.tss_illegibility_info = message.tssIllegibilityInfo ? QueryValidatorsResponse_TssIllegibilityInfo.toAmino(message.tssIllegibilityInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsResponse_Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValidatorsResponse_Validator.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsResponse_Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.Validator",
            value: QueryValidatorsResponse_Validator.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.snapshot.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/axelar.snapshot.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.snapshot.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map