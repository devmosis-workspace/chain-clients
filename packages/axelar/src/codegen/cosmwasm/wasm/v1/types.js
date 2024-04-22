import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
/** AccessType permission types */
export var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (AccessType = {}));
export const AccessTypeSDKType = AccessType;
export const AccessTypeAmino = AccessType;
export function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case 4:
        case "ACCESS_TYPE_ANY_OF_ADDRESSES":
            return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
export function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
            return "ACCESS_TYPE_ANY_OF_ADDRESSES";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
export var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (ContractCodeHistoryOperationType = {}));
export const ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
export const ContractCodeHistoryOperationTypeAmino = ContractCodeHistoryOperationType;
export function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
export function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAccessTypeParam() {
    return {
        value: 0
    };
}
export const AccessTypeParam = {
    typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
    encode(message, writer = BinaryWriter.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? accessTypeFromJSON(object.value) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseAccessTypeParam();
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessTypeParam();
        if (object.value !== undefined && object.value !== null) {
            message.value = accessTypeFromJSON(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return AccessTypeParam.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessTypeParam",
            value: AccessTypeParam.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccessTypeParam.decode(message.value);
    },
    toProto(message) {
        return AccessTypeParam.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
            value: AccessTypeParam.encode(message).finish()
        };
    }
};
function createBaseAccessConfig() {
    return {
        permission: 0,
        address: "",
        addresses: []
    };
}
export const AccessConfig = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
    encode(message, writer = BinaryWriter.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : -1,
            address: isSet(object.address) ? String(object.address) : "",
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseAccessConfig();
        message.permission = object.permission ?? 0;
        message.address = object.address ?? "";
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessConfig();
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = accessTypeFromJSON(object.permission);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.permission = message.permission;
        obj.address = message.address;
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccessConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessConfig",
            value: AccessConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccessConfig.decode(message.value);
    },
    toProto(message) {
        return AccessConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
            value: AccessConfig.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        codeUploadAccess: AccessConfig.fromPartial({}),
        instantiateDefaultPermission: 0
    };
}
export const Params = {
    typeUrl: "/cosmwasm.wasm.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeUploadAccess !== undefined) {
            AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeUploadAccess: isSet(object.codeUploadAccess) ? AccessConfig.fromJSON(object.codeUploadAccess) : undefined,
            instantiateDefaultPermission: isSet(object.instantiateDefaultPermission) ? accessTypeFromJSON(object.instantiateDefaultPermission) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
        message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.code_upload_access !== undefined && object.code_upload_access !== null) {
            message.codeUploadAccess = AccessConfig.fromAmino(object.code_upload_access);
        }
        if (object.instantiate_default_permission !== undefined && object.instantiate_default_permission !== null) {
            message.instantiateDefaultPermission = accessTypeFromJSON(object.instantiate_default_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_upload_access = message.codeUploadAccess ? AccessConfig.toAmino(message.codeUploadAccess) : undefined;
        obj.instantiate_default_permission = message.instantiateDefaultPermission;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Params",
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
            typeUrl: "/cosmwasm.wasm.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(),
        creator: "",
        instantiateConfig: AccessConfig.fromPartial({})
    };
}
export const CodeInfo = {
    typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
            creator: isSet(object.creator) ? String(object.creator) : "",
            instantiateConfig: isSet(object.instantiateConfig) ? AccessConfig.fromJSON(object.instantiateConfig) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseCodeInfo();
        message.codeHash = object.codeHash ?? new Uint8Array();
        message.creator = object.creator ?? "";
        message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCodeInfo();
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = bytesFromBase64(object.code_hash);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.instantiate_config !== undefined && object.instantiate_config !== null) {
            message.instantiateConfig = AccessConfig.fromAmino(object.instantiate_config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
        obj.creator = message.creator;
        obj.instantiate_config = message.instantiateConfig ? AccessConfig.toAmino(message.instantiateConfig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CodeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/CodeInfo",
            value: CodeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CodeInfo.decode(message.value);
    },
    toProto(message) {
        return CodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
            value: CodeInfo.encode(message).finish()
        };
    }
};
function createBaseContractInfo() {
    return {
        codeId: BigInt(0),
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined
    };
}
export const ContractInfo = {
    typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            creator: isSet(object.creator) ? String(object.creator) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            label: isSet(object.label) ? String(object.label) : "",
            created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
            ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
            extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseContractInfo();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
        message.ibcPortId = object.ibcPortId ?? "";
        message.extension = object.extension !== undefined && object.extension !== null ? Any.fromPartial(object.extension) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractInfo();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = AbsoluteTxPosition.fromAmino(object.created);
        }
        if (object.ibc_port_id !== undefined && object.ibc_port_id !== null) {
            message.ibcPortId = object.ibc_port_id;
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = Cosmwasm_wasmv1ContractInfoExtension_FromAmino(object.extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.creator = message.creator;
        obj.admin = message.admin;
        obj.label = message.label;
        obj.created = message.created ? AbsoluteTxPosition.toAmino(message.created) : undefined;
        obj.ibc_port_id = message.ibcPortId;
        obj.extension = message.extension ? Cosmwasm_wasmv1ContractInfoExtension_ToAmino(message.extension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractInfo",
            value: ContractInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContractInfo.decode(message.value);
    },
    toProto(message) {
        return ContractInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
            value: ContractInfo.encode(message).finish()
        };
    }
};
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: BigInt(0),
        updated: undefined,
        msg: new Uint8Array()
    };
}
export const ContractCodeHistoryEntry = {
    typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : -1,
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseContractCodeHistoryEntry();
        message.operation = object.operation ?? 0;
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCodeHistoryEntry();
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = contractCodeHistoryOperationTypeFromJSON(object.operation);
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.updated !== undefined && object.updated !== null) {
            message.updated = AbsoluteTxPosition.fromAmino(object.updated);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operation = message.operation;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.updated = message.updated ? AbsoluteTxPosition.toAmino(message.updated) : undefined;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCodeHistoryEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ContractCodeHistoryEntry",
            value: ContractCodeHistoryEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContractCodeHistoryEntry.decode(message.value);
    },
    toProto(message) {
        return ContractCodeHistoryEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
            value: ContractCodeHistoryEntry.encode(message).finish()
        };
    }
};
function createBaseAbsoluteTxPosition() {
    return {
        blockHeight: BigInt(0),
        txIndex: BigInt(0)
    };
}
export const AbsoluteTxPosition = {
    typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseAbsoluteTxPosition();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = BigInt(object.tx_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AbsoluteTxPosition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AbsoluteTxPosition",
            value: AbsoluteTxPosition.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AbsoluteTxPosition.decode(message.value);
    },
    toProto(message) {
        return AbsoluteTxPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
            value: AbsoluteTxPosition.encode(message).finish()
        };
    }
};
function createBaseModel() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const Model = {
    typeUrl: "/cosmwasm.wasm.v1.Model",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseModel();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Model.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Model",
            value: Model.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Model.decode(message.value);
    },
    toProto(message) {
        return Model.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Model",
            value: Model.encode(message).finish()
        };
    }
};
export const Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Cosmwasm_wasmv1ContractInfoExtension_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Cosmwasm_wasmv1ContractInfoExtension_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=types.js.map