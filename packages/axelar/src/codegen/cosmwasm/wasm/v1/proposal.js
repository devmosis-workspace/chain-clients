import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseStoreCodeProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
export const StoreCodeProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(64).bool(message.unpinCode);
        }
        if (message.source !== "") {
            writer.uint32(74).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(82).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(90).bytes(message.codeHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
            unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
            source: isSet(object.source) ? String(object.source) : "",
            builder: isSet(object.builder) ? String(object.builder) : "",
            codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseStoreCodeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreCodeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = fromBase64(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
        }
        if (object.unpin_code !== undefined && object.unpin_code !== null) {
            message.unpinCode = object.unpin_code;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        if (object.builder !== undefined && object.builder !== null) {
            message.builder = object.builder;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = bytesFromBase64(object.code_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
        obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
        obj.unpin_code = message.unpinCode;
        obj.source = message.source;
        obj.builder = message.builder;
        obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreCodeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/StoreCodeProposal",
            value: StoreCodeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreCodeProposal.decode(message.value);
    },
    toProto(message) {
        return StoreCodeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
            value: StoreCodeProposal.encode(message).finish()
        };
    }
};
function createBaseInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const InstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            label: isSet(object.label) ? String(object.label) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.admin = object.admin ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInstantiateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        return InstantiateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/InstantiateContractProposal",
            value: InstantiateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return InstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
            value: InstantiateContractProposal.encode(message).finish()
        };
    }
};
function createBaseInstantiateContract2Proposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: BigInt(0),
        label: "",
        msg: new Uint8Array(),
        funds: [],
        salt: new Uint8Array(),
        fixMsg: false
    };
}
export const InstantiateContract2Proposal = {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.salt.length !== 0) {
            writer.uint32(74).bytes(message.salt);
        }
        if (message.fixMsg === true) {
            writer.uint32(80).bool(message.fixMsg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
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
        const message = createBaseInstantiateContract2Proposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
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
        const message = createBaseInstantiateContract2Proposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        return InstantiateContract2Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/InstantiateContract2Proposal",
            value: InstantiateContract2Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InstantiateContract2Proposal.decode(message.value);
    },
    toProto(message) {
        return InstantiateContract2Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
            value: InstantiateContract2Proposal.encode(message).finish()
        };
    }
};
function createBaseMigrateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        title: "",
        description: "",
        contract: "",
        codeId: BigInt(0),
        msg: new Uint8Array()
    };
}
export const MigrateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.codeId !== BigInt(0)) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMigrateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MigrateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/MigrateContractProposal",
            value: MigrateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MigrateContractProposal.decode(message.value);
    },
    toProto(message) {
        return MigrateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
            value: MigrateContractProposal.encode(message).finish()
        };
    }
};
function createBaseSudoContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        title: "",
        description: "",
        contract: "",
        msg: new Uint8Array()
    };
}
export const SudoContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSudoContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSudoContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SudoContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/SudoContractProposal",
            value: SudoContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SudoContractProposal.decode(message.value);
    },
    toProto(message) {
        return SudoContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
            value: SudoContractProposal.encode(message).finish()
        };
    }
};
function createBaseExecuteContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        title: "",
        description: "",
        runAs: "",
        contract: "",
        msg: new Uint8Array(),
        funds: []
    };
}
export const ExecuteContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseExecuteContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExecuteContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
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
        return ExecuteContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ExecuteContractProposal",
            value: ExecuteContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ExecuteContractProposal.decode(message.value);
    },
    toProto(message) {
        return ExecuteContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
            value: ExecuteContractProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        title: "",
        description: "",
        newAdmin: "",
        contract: ""
    };
}
export const UpdateAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        obj.title = message.title;
        obj.description = message.description;
        obj.new_admin = message.newAdmin;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UpdateAdminProposal",
            value: UpdateAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpdateAdminProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
            value: UpdateAdminProposal.encode(message).finish()
        };
    }
};
function createBaseClearAdminProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        title: "",
        description: "",
        contract: ""
    };
}
export const ClearAdminProposal = {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseClearAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClearAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return ClearAdminProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/ClearAdminProposal",
            value: ClearAdminProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClearAdminProposal.decode(message.value);
    },
    toProto(message) {
        return ClearAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
            value: ClearAdminProposal.encode(message).finish()
        };
    }
};
function createBasePinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
export const PinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBasePinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/PinCodesProposal",
            value: PinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return PinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
            value: PinCodesProposal.encode(message).finish()
        };
    }
};
function createBaseUnpinCodesProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        title: "",
        description: "",
        codeIds: []
    };
}
export const UnpinCodesProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
        };
    },
    fromPartial(object) {
        const message = createBaseUnpinCodesProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnpinCodesProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.codeIds) {
            obj.code_ids = message.codeIds.map(e => e.toString());
        }
        else {
            obj.code_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnpinCodesProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UnpinCodesProposal",
            value: UnpinCodesProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnpinCodesProposal.decode(message.value);
    },
    toProto(message) {
        return UnpinCodesProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
            value: UnpinCodesProposal.encode(message).finish()
        };
    }
};
function createBaseAccessConfigUpdate() {
    return {
        codeId: BigInt(0),
        instantiatePermission: AccessConfig.fromPartial({})
    };
}
export const AccessConfigUpdate = {
    typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseAccessConfigUpdate();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessConfigUpdate();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccessConfigUpdate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/AccessConfigUpdate",
            value: AccessConfigUpdate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccessConfigUpdate.decode(message.value);
    },
    toProto(message) {
        return AccessConfigUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
            value: AccessConfigUpdate.encode(message).finish()
        };
    }
};
function createBaseUpdateInstantiateConfigProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        title: "",
        description: "",
        accessConfigUpdates: []
    };
}
export const UpdateInstantiateConfigProposal = {
    typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.accessConfigUpdates) {
            AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            accessConfigUpdates: Array.isArray(object?.accessConfigUpdates) ? object.accessConfigUpdates.map((e) => AccessConfigUpdate.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseUpdateInstantiateConfigProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.accessConfigUpdates = object.accessConfigUpdates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateInstantiateConfigProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.accessConfigUpdates = object.access_config_updates?.map(e => AccessConfigUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.accessConfigUpdates) {
            obj.access_config_updates = message.accessConfigUpdates.map(e => e ? AccessConfigUpdate.toAmino(e) : undefined);
        }
        else {
            obj.access_config_updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateInstantiateConfigProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/UpdateInstantiateConfigProposal",
            value: UpdateInstantiateConfigProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpdateInstantiateConfigProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateInstantiateConfigProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
            value: UpdateInstantiateConfigProposal.encode(message).finish()
        };
    }
};
function createBaseStoreAndInstantiateContractProposal() {
    return {
        $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        title: "",
        description: "",
        runAs: "",
        wasmByteCode: new Uint8Array(),
        instantiatePermission: undefined,
        unpinCode: false,
        admin: "",
        label: "",
        msg: new Uint8Array(),
        funds: [],
        source: "",
        builder: "",
        codeHash: new Uint8Array()
    };
}
export const StoreAndInstantiateContractProposal = {
    typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
        }
        if (message.unpinCode === true) {
            writer.uint32(48).bool(message.unpinCode);
        }
        if (message.admin !== "") {
            writer.uint32(58).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(66).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(74).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.source !== "") {
            writer.uint32(90).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(98).string(message.builder);
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(106).bytes(message.codeHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
            unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
            admin: isSet(object.admin) ? String(object.admin) : "",
            label: isSet(object.label) ? String(object.label) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object?.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
            source: isSet(object.source) ? String(object.source) : "",
            builder: isSet(object.builder) ? String(object.builder) : "",
            codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseStoreAndInstantiateContractProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.runAs = object.runAs ?? "";
        message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
        message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
        message.unpinCode = object.unpinCode ?? false;
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.msg = object.msg ?? new Uint8Array();
        message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
        message.source = object.source ?? "";
        message.builder = object.builder ?? "";
        message.codeHash = object.codeHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreAndInstantiateContractProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.run_as !== undefined && object.run_as !== null) {
            message.runAs = object.run_as;
        }
        if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
            message.wasmByteCode = fromBase64(object.wasm_byte_code);
        }
        if (object.instantiate_permission !== undefined && object.instantiate_permission !== null) {
            message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
        }
        if (object.unpin_code !== undefined && object.unpin_code !== null) {
            message.unpinCode = object.unpin_code;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = toUtf8(JSON.stringify(object.msg));
        }
        message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        if (object.builder !== undefined && object.builder !== null) {
            message.builder = object.builder;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = bytesFromBase64(object.code_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.run_as = message.runAs;
        obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
        obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : undefined;
        obj.unpin_code = message.unpinCode;
        obj.admin = message.admin;
        obj.label = message.label;
        obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
        if (message.funds) {
            obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        obj.source = message.source;
        obj.builder = message.builder;
        obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreAndInstantiateContractProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/StoreAndInstantiateContractProposal",
            value: StoreAndInstantiateContractProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreAndInstantiateContractProposal.decode(message.value);
    },
    toProto(message) {
        return StoreAndInstantiateContractProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
            value: StoreAndInstantiateContractProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map