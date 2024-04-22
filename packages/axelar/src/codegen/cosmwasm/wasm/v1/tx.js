import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseMsgStoreCode() {
    return {
        sender: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined
    };
}
export const MsgStoreCode = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(18).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCode();
        message.sender = object.sender ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreCode();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = fromBase64(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStoreCode.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgStoreCode",
            value: MsgStoreCode.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgStoreCode.decode(message.value);
    },
    toProto(message) {
        return MsgStoreCode.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: MsgStoreCode.encode(message).finish()
        };
    }
};
function createBaseMsgStoreCodeResponse() {
    return {
        codeId: BigInt(0),
        checksum: new Uint8Array()
    };
}
export const MsgStoreCodeResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(18).bytes(message.checksum);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgStoreCodeResponse();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.checksum = object.checksum ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreCodeResponse();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.checksum !== undefined && object.checksum !== null) {
            message.checksum = bytesFromBase64(object.checksum);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStoreCodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgStoreCodeResponse",
            value: MsgStoreCodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgStoreCodeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStoreCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
            value: MsgStoreCodeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantiateContract() {
    return {
        sender: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const MsgInstantiateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            label: isSet(object.label) ? String(object.label) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract();
        message.sender = object.sender ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.admin = message.admin;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.label = message.label;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantiateContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContract",
            value: MsgInstantiateContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: MsgInstantiateContract.encode(message).finish()
        };
    }
};
function createBaseMsgInstantiateContract2() {
    return {
        sender: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false
    };
}
export const MsgInstantiateContract2 = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(58).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(64).bool(message.fixMsg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            label: isSet(object.label) ? String(object.label) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
            salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
            fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
        };
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract2();
        message.sender = object.sender ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        message.salt = object.salt ?? new Uint8Array();
        message.fixMsg = object.fixMsg ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContract2();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = bytesFromBase64(object.salt);
        }
        if (object.fix_msg !== undefined && object.fix_msg !== null) {
            message.fixMsg = object.fix_msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.admin = message.admin;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.label = message.label;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
        obj.fix_msg = message.fixMsg;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantiateContract2.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContract2",
            value: MsgInstantiateContract2.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract2.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract2.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
            value: MsgInstantiateContract2.encode(message).finish()
        };
    }
};
function createBaseMsgInstantiateContractResponse() {
    return {
        address: "",
        data: new Uint8Array()
    };
}
export const MsgInstantiateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContractResponse();
        message.address = object.address ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContractResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantiateContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContractResponse",
            value: MsgInstantiateContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgInstantiateContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
            value: MsgInstantiateContractResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantiateContract2Response() {
    return {
        address: "",
        data: new Uint8Array()
    };
}
export const MsgInstantiateContract2Response = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgInstantiateContract2Response();
        message.address = object.address ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantiateContract2Response();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantiateContract2Response.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgInstantiateContract2Response",
            value: MsgInstantiateContract2Response.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgInstantiateContract2Response.decode(message.value);
    },
    toProto(message) {
        return MsgInstantiateContract2Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
            value: MsgInstantiateContract2Response.encode(message).finish()
        };
    }
};
function createBaseMsgExecuteContract() {
    return {
        sender: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const MsgExecuteContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecuteContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecuteContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgExecuteContract",
            value: MsgExecuteContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExecuteContract.decode(message.value);
    },
    toProto(message) {
        return MsgExecuteContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: MsgExecuteContract.encode(message).finish()
        };
    }
};
function createBaseMsgExecuteContractResponse() {
    return {
        data: new Uint8Array()
    };
}
export const MsgExecuteContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecuteContractResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecuteContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgExecuteContractResponse",
            value: MsgExecuteContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExecuteContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecuteContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
            value: MsgExecuteContractResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMigrateContract() {
    return {
        sender: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
export const MsgMigrateContract = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContract();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMigrateContract();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMigrateContract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgMigrateContract",
            value: MsgMigrateContract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMigrateContract.decode(message.value);
    },
    toProto(message) {
        return MsgMigrateContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: MsgMigrateContract.encode(message).finish()
        };
    }
};
function createBaseMsgMigrateContractResponse() {
    return {
        data: new Uint8Array()
    };
}
export const MsgMigrateContractResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgMigrateContractResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMigrateContractResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMigrateContractResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgMigrateContractResponse",
            value: MsgMigrateContractResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMigrateContractResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMigrateContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
            value: MsgMigrateContractResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAdmin() {
    return {
        sender: "",
        newAdmin: "",
        contract: ""
    };
}
export const MsgUpdateAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAdmin();
        message.sender = object.sender ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateAdmin",
            value: MsgUpdateAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: MsgUpdateAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAdminResponse() {
    return {};
}
export const MsgUpdateAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateAdminResponse",
            value: MsgUpdateAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
            value: MsgUpdateAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClearAdmin() {
    return {
        sender: "",
        contract: ""
    };
}
export const MsgClearAdmin = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgClearAdmin();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClearAdmin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClearAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgClearAdmin",
            value: MsgClearAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgClearAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgClearAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: MsgClearAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgClearAdminResponse() {
    return {};
}
export const MsgClearAdminResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClearAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgClearAdminResponse",
            value: MsgClearAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgClearAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClearAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
            value: MsgClearAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateInstantiateConfig() {
    return {
        sender: "",
        codeId: BigInt(0),
        newInstantiatePermission: undefined
    };
}
export const MsgUpdateInstantiateConfig = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.newInstantiatePermission !== undefined) {
            AccessConfig.encode(message.newInstantiatePermission, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            newInstantiatePermission: isSet(object.newInstantiatePermission) ? AccessConfig.fromJSON(object.newInstantiatePermission) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateInstantiateConfig();
        message.sender = object.sender ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.newInstantiatePermission = object.newInstantiatePermission !== undefined && object.newInstantiatePermission !== null ? AccessConfig.fromPartial(object.newInstantiatePermission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateInstantiateConfig();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.new_instantiate_permission !== undefined && object.new_instantiate_permission !== null) {
            message.newInstantiatePermission = AccessConfig.fromAmino(object.new_instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.new_instantiate_permission = message.newInstantiatePermission ? AccessConfig.toAmino(message.newInstantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateInstantiateConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateInstantiateConfig",
            value: MsgUpdateInstantiateConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateInstantiateConfig.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateInstantiateConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
            value: MsgUpdateInstantiateConfig.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateInstantiateConfigResponse() {
    return {};
}
export const MsgUpdateInstantiateConfigResponse = {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateInstantiateConfigResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateInstantiateConfigResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateInstantiateConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MsgUpdateInstantiateConfigResponse",
            value: MsgUpdateInstantiateConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateInstantiateConfigResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateInstantiateConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
            value: MsgUpdateInstantiateConfigResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map