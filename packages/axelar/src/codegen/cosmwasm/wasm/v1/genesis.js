import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        codes: [],
        contracts: [],
        sequences: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            codes: Array.isArray(object?.codes) ? object.codes.map((e) => Code.fromJSON(e)) : [],
            contracts: Array.isArray(object?.contracts) ? object.contracts.map((e) => Contract.fromJSON(e)) : [],
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Sequence.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
        message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
        message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.codes) {
            obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/GenesisState",
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
            typeUrl: "/cosmwasm.wasm.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseCode() {
    return {
        codeId: BigInt(0),
        codeInfo: CodeInfo.fromPartial({}),
        codeBytes: new Uint8Array(),
        pinned: false
    };
}
export const Code = {
    typeUrl: "/cosmwasm.wasm.v1.Code",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
            codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
            codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
            pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
        };
    },
    fromPartial(object) {
        const message = createBaseCode();
        message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
        message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
        message.codeBytes = object.codeBytes ?? new Uint8Array();
        message.pinned = object.pinned ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCode();
        if (object.code_id !== undefined && object.code_id !== null) {
            message.codeId = BigInt(object.code_id);
        }
        if (object.code_info !== undefined && object.code_info !== null) {
            message.codeInfo = CodeInfo.fromAmino(object.code_info);
        }
        if (object.code_bytes !== undefined && object.code_bytes !== null) {
            message.codeBytes = bytesFromBase64(object.code_bytes);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code_id = message.codeId ? message.codeId.toString() : undefined;
        obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
        obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
        obj.pinned = message.pinned;
        return obj;
    },
    fromAminoMsg(object) {
        return Code.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Code",
            value: Code.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Code.decode(message.value);
    },
    toProto(message) {
        return Code.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Code",
            value: Code.encode(message).finish()
        };
    }
};
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: ContractInfo.fromPartial({}),
        contractState: [],
        contractCodeHistory: []
    };
}
export const Contract = {
    typeUrl: "/cosmwasm.wasm.v1.Contract",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.contractCodeHistory) {
            ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
            contractState: Array.isArray(object?.contractState) ? object.contractState.map((e) => Model.fromJSON(e)) : [],
            contractCodeHistory: Array.isArray(object?.contractCodeHistory) ? object.contractCodeHistory.map((e) => ContractCodeHistoryEntry.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseContract();
        message.contractAddress = object.contractAddress ?? "";
        message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
        message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
        message.contractCodeHistory = object.contractCodeHistory?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContract();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.contract_info !== undefined && object.contract_info !== null) {
            message.contractInfo = ContractInfo.fromAmino(object.contract_info);
        }
        message.contractState = object.contract_state?.map(e => Model.fromAmino(e)) || [];
        message.contractCodeHistory = object.contract_code_history?.map(e => ContractCodeHistoryEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
        if (message.contractState) {
            obj.contract_state = message.contractState.map(e => e ? Model.toAmino(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        if (message.contractCodeHistory) {
            obj.contract_code_history = message.contractCodeHistory.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
        }
        else {
            obj.contract_code_history = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Contract.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Contract",
            value: Contract.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Contract.decode(message.value);
    },
    toProto(message) {
        return Contract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Contract",
            value: Contract.encode(message).finish()
        };
    }
};
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: BigInt(0)
    };
}
export const Sequence = {
    typeUrl: "/cosmwasm.wasm.v1.Sequence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
            value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSequence();
        if (object.id_key !== undefined && object.id_key !== null) {
            message.idKey = bytesFromBase64(object.id_key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id_key = message.idKey ? base64FromBytes(message.idKey) : undefined;
        obj.value = message.value ? message.value.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Sequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "wasm/Sequence",
            value: Sequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Sequence.decode(message.value);
    },
    toProto(message) {
        return Sequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.Sequence",
            value: Sequence.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map