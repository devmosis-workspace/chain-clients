import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseCallContractsProposal() {
    return {
        title: "",
        description: "",
        contractCalls: []
    };
}
export const CallContractsProposal = {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractsProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.contractCalls) {
            ContractCall.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contractCalls: Array.isArray(object?.contractCalls) ? object.contractCalls.map((e) => ContractCall.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCallContractsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contractCalls = object.contractCalls?.map(e => ContractCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCallContractsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.contractCalls = object.contract_calls?.map(e => ContractCall.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.contractCalls) {
            obj.contract_calls = message.contractCalls.map(e => e ? ContractCall.toAmino(e) : undefined);
        }
        else {
            obj.contract_calls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CallContractsProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CallContractsProposal.decode(message.value);
    },
    toProto(message) {
        return CallContractsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.CallContractsProposal",
            value: CallContractsProposal.encode(message).finish()
        };
    }
};
function createBaseContractCall() {
    return {
        chain: "",
        contractAddress: "",
        payload: new Uint8Array()
    };
}
export const ContractCall = {
    typeUrl: "/axelar.axelarnet.v1beta1.ContractCall",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(26).bytes(message.payload);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseContractCall();
        message.chain = object.chain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseContractCall();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.contract_address = message.contractAddress;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContractCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContractCall.decode(message.value);
    },
    toProto(message) {
        return ContractCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ContractCall",
            value: ContractCall.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposal.js.map