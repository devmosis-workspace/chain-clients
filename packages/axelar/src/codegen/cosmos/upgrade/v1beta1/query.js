import { Plan, ModuleVersion } from "./upgrade";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
export const QueryCurrentPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanRequest",
            value: QueryCurrentPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentPlanRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
            value: QueryCurrentPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined
    };
}
export const QueryCurrentPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentPlanResponse();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanResponse",
            value: QueryCurrentPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCurrentPlanResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
            value: QueryCurrentPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanRequest() {
    return {
        name: ""
    };
}
export const QueryAppliedPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAppliedPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanRequest",
            value: QueryAppliedPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAppliedPlanRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAppliedPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
            value: QueryAppliedPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0)
    };
}
export const QueryAppliedPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAppliedPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanResponse",
            value: QueryAppliedPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAppliedPlanResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAppliedPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
            value: QueryAppliedPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: BigInt(0)
    };
}
export const QueryUpgradedConsensusStateRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lastHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            lastHeight: isSet(object.lastHeight) ? BigInt(object.lastHeight.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        if (object.last_height !== undefined && object.last_height !== null) {
            message.lastHeight = BigInt(object.last_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_height = message.lastHeight ? message.lastHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array()
    };
}
export const QueryUpgradedConsensusStateResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            upgradedConsensusState: isSet(object.upgradedConsensusState) ? bytesFromBase64(object.upgradedConsensusState) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = bytesFromBase64(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? base64FromBytes(message.upgradedConsensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: ""
    };
}
export const QueryModuleVersionsRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsRequest();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.moduleName;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleVersionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsRequest",
            value: QueryModuleVersionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleVersionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleVersionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
            value: QueryModuleVersionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: []
    };
}
export const QueryModuleVersionsResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.moduleVersions) {
            ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            moduleVersions: Array.isArray(object?.moduleVersions) ? object.moduleVersions.map((e) => ModuleVersion.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.moduleVersions?.map(e => ModuleVersion.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.module_versions?.map(e => ModuleVersion.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.module_versions = message.moduleVersions.map(e => e ? ModuleVersion.toAmino(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleVersionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsResponse",
            value: QueryModuleVersionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleVersionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleVersionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
            value: QueryModuleVersionsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map