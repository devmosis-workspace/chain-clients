import { Asset, TokenDetails } from "./types";
import { keyTypeFromJSON } from "../../tss/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseSetGatewayRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        address: new Uint8Array()
    };
}
export const SetGatewayRequest = {
    typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.address.length !== 0) {
            writer.uint32(26).bytes(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSetGatewayRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.address = object.address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetGatewayRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetGatewayRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetGatewayRequest.decode(message.value);
    },
    toProto(message) {
        return SetGatewayRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest",
            value: SetGatewayRequest.encode(message).finish()
        };
    }
};
function createBaseSetGatewayResponse() {
    return {};
}
export const SetGatewayResponse = {
    typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseSetGatewayResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseSetGatewayResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return SetGatewayResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetGatewayResponse.decode(message.value);
    },
    toProto(message) {
        return SetGatewayResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse",
            value: SetGatewayResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txId: new Uint8Array()
    };
}
export const ConfirmGatewayTxRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmGatewayTxRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmGatewayTxRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest",
            value: ConfirmGatewayTxRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxResponse() {
    return {};
}
export const ConfirmGatewayTxResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfirmGatewayTxResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfirmGatewayTxResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse",
            value: ConfirmGatewayTxResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxsRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txIds: []
    };
}
export const ConfirmGatewayTxsRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        for (const v of message.txIds) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txIds: Array.isArray(object?.txIds) ? object.txIds.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmGatewayTxsRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.txIds = object.txIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmGatewayTxsRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        message.txIds = object.tx_ids?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        if (message.txIds) {
            obj.tx_ids = message.txIds.map(e => base64FromBytes(e));
        }
        else {
            obj.tx_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxsRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest",
            value: ConfirmGatewayTxsRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmGatewayTxsResponse() {
    return {};
}
export const ConfirmGatewayTxsResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfirmGatewayTxsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfirmGatewayTxsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmGatewayTxsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmGatewayTxsResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmGatewayTxsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse",
            value: ConfirmGatewayTxsResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmDepositRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txId: new Uint8Array(),
        amount: new Uint8Array(),
        burnerAddress: new Uint8Array()
    };
}
export const ConfirmDepositRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        if (message.amount.length !== 0) {
            writer.uint32(34).bytes(message.amount);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(42).bytes(message.burnerAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmDepositRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        message.amount = object.amount ?? new Uint8Array();
        message.burnerAddress = object.burnerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmDepositRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        if (object.burner_address !== undefined && object.burner_address !== null) {
            message.burnerAddress = bytesFromBase64(object.burner_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
        obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmDepositRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest",
            value: ConfirmDepositRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmDepositResponse() {
    return {};
}
export const ConfirmDepositResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfirmDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfirmDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmDepositResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse",
            value: ConfirmDepositResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmTokenRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txId: new Uint8Array(),
        asset: Asset.fromPartial({})
    };
}
export const ConfirmTokenRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmTokenRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmTokenRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Asset.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmTokenRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmTokenRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmTokenRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest",
            value: ConfirmTokenRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmTokenResponse() {
    return {};
}
export const ConfirmTokenResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfirmTokenResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfirmTokenResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmTokenResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmTokenResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmTokenResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse",
            value: ConfirmTokenResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmTransferKeyRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        txId: new Uint8Array()
    };
}
export const ConfirmTransferKeyRequest = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(26).bytes(message.txId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmTransferKeyRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmTransferKeyRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmTransferKeyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmTransferKeyRequest.decode(message.value);
    },
    toProto(message) {
        return ConfirmTransferKeyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest",
            value: ConfirmTransferKeyRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmTransferKeyResponse() {
    return {};
}
export const ConfirmTransferKeyResponse = {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseConfirmTransferKeyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfirmTransferKeyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfirmTransferKeyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConfirmTransferKeyResponse.decode(message.value);
    },
    toProto(message) {
        return ConfirmTransferKeyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse",
            value: ConfirmTransferKeyResponse.encode(message).finish()
        };
    }
};
function createBaseLinkRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        recipientAddr: "",
        asset: "",
        recipientChain: ""
    };
}
export const LinkRequest = {
    typeUrl: "/axelar.evm.v1beta1.LinkRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.recipientAddr !== "") {
            writer.uint32(26).string(message.recipientAddr);
        }
        if (message.asset !== "") {
            writer.uint32(34).string(message.asset);
        }
        if (message.recipientChain !== "") {
            writer.uint32(42).string(message.recipientChain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseLinkRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.recipientAddr = object.recipientAddr ?? "";
        message.asset = object.asset ?? "";
        message.recipientChain = object.recipientChain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLinkRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.recipient_addr !== undefined && object.recipient_addr !== null) {
            message.recipientAddr = object.recipient_addr;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.recipient_addr = message.recipientAddr;
        obj.asset = message.asset;
        obj.recipient_chain = message.recipientChain;
        return obj;
    },
    fromAminoMsg(object) {
        return LinkRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LinkRequest.decode(message.value);
    },
    toProto(message) {
        return LinkRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.LinkRequest",
            value: LinkRequest.encode(message).finish()
        };
    }
};
function createBaseLinkResponse() {
    return {
        depositAddr: ""
    };
}
export const LinkResponse = {
    typeUrl: "/axelar.evm.v1beta1.LinkResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseLinkResponse();
        message.depositAddr = object.depositAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLinkResponse();
        if (object.deposit_addr !== undefined && object.deposit_addr !== null) {
            message.depositAddr = object.deposit_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_addr = message.depositAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return LinkResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LinkResponse.decode(message.value);
    },
    toProto(message) {
        return LinkResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.LinkResponse",
            value: LinkResponse.encode(message).finish()
        };
    }
};
function createBaseCreateBurnTokensRequest() {
    return {
        sender: new Uint8Array(),
        chain: ""
    };
}
export const CreateBurnTokensRequest = {
    typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCreateBurnTokensRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateBurnTokensRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return CreateBurnTokensRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateBurnTokensRequest.decode(message.value);
    },
    toProto(message) {
        return CreateBurnTokensRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest",
            value: CreateBurnTokensRequest.encode(message).finish()
        };
    }
};
function createBaseCreateBurnTokensResponse() {
    return {};
}
export const CreateBurnTokensResponse = {
    typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCreateBurnTokensResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCreateBurnTokensResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CreateBurnTokensResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateBurnTokensResponse.decode(message.value);
    },
    toProto(message) {
        return CreateBurnTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse",
            value: CreateBurnTokensResponse.encode(message).finish()
        };
    }
};
function createBaseCreateDeployTokenRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        asset: Asset.fromPartial({}),
        tokenDetails: TokenDetails.fromPartial({}),
        address: new Uint8Array(),
        dailyMintLimit: ""
    };
}
export const CreateDeployTokenRequest = {
    typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenDetails !== undefined) {
            TokenDetails.encode(message.tokenDetails, writer.uint32(34).fork()).ldelim();
        }
        if (message.address.length !== 0) {
            writer.uint32(50).bytes(message.address);
        }
        if (message.dailyMintLimit !== "") {
            writer.uint32(58).string(message.dailyMintLimit);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
            tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            dailyMintLimit: isSet(object.dailyMintLimit) ? String(object.dailyMintLimit) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCreateDeployTokenRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
        message.tokenDetails = object.tokenDetails !== undefined && object.tokenDetails !== null ? TokenDetails.fromPartial(object.tokenDetails) : undefined;
        message.address = object.address ?? new Uint8Array();
        message.dailyMintLimit = object.dailyMintLimit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateDeployTokenRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Asset.fromAmino(object.asset);
        }
        if (object.token_details !== undefined && object.token_details !== null) {
            message.tokenDetails = TokenDetails.fromAmino(object.token_details);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.daily_mint_limit !== undefined && object.daily_mint_limit !== null) {
            message.dailyMintLimit = object.daily_mint_limit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        obj.token_details = message.tokenDetails ? TokenDetails.toAmino(message.tokenDetails) : undefined;
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.daily_mint_limit = message.dailyMintLimit;
        return obj;
    },
    fromAminoMsg(object) {
        return CreateDeployTokenRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateDeployTokenRequest.decode(message.value);
    },
    toProto(message) {
        return CreateDeployTokenRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest",
            value: CreateDeployTokenRequest.encode(message).finish()
        };
    }
};
function createBaseCreateDeployTokenResponse() {
    return {};
}
export const CreateDeployTokenResponse = {
    typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCreateDeployTokenResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCreateDeployTokenResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CreateDeployTokenResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateDeployTokenResponse.decode(message.value);
    },
    toProto(message) {
        return CreateDeployTokenResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse",
            value: CreateDeployTokenResponse.encode(message).finish()
        };
    }
};
function createBaseCreatePendingTransfersRequest() {
    return {
        sender: new Uint8Array(),
        chain: ""
    };
}
export const CreatePendingTransfersRequest = {
    typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCreatePendingTransfersRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreatePendingTransfersRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return CreatePendingTransfersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreatePendingTransfersRequest.decode(message.value);
    },
    toProto(message) {
        return CreatePendingTransfersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest",
            value: CreatePendingTransfersRequest.encode(message).finish()
        };
    }
};
function createBaseCreatePendingTransfersResponse() {
    return {};
}
export const CreatePendingTransfersResponse = {
    typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCreatePendingTransfersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCreatePendingTransfersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CreatePendingTransfersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreatePendingTransfersResponse.decode(message.value);
    },
    toProto(message) {
        return CreatePendingTransfersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse",
            value: CreatePendingTransfersResponse.encode(message).finish()
        };
    }
};
function createBaseCreateTransferOwnershipRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        keyId: ""
    };
}
export const CreateTransferOwnershipRequest = {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCreateTransferOwnershipRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateTransferOwnershipRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return CreateTransferOwnershipRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateTransferOwnershipRequest.decode(message.value);
    },
    toProto(message) {
        return CreateTransferOwnershipRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest",
            value: CreateTransferOwnershipRequest.encode(message).finish()
        };
    }
};
function createBaseCreateTransferOwnershipResponse() {
    return {};
}
export const CreateTransferOwnershipResponse = {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCreateTransferOwnershipResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCreateTransferOwnershipResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CreateTransferOwnershipResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateTransferOwnershipResponse.decode(message.value);
    },
    toProto(message) {
        return CreateTransferOwnershipResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse",
            value: CreateTransferOwnershipResponse.encode(message).finish()
        };
    }
};
function createBaseCreateTransferOperatorshipRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        keyId: ""
    };
}
export const CreateTransferOperatorshipRequest = {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            keyId: isSet(object.keyId) ? String(object.keyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCreateTransferOperatorshipRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.keyId = object.keyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateTransferOperatorshipRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.key_id = message.keyId;
        return obj;
    },
    fromAminoMsg(object) {
        return CreateTransferOperatorshipRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateTransferOperatorshipRequest.decode(message.value);
    },
    toProto(message) {
        return CreateTransferOperatorshipRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest",
            value: CreateTransferOperatorshipRequest.encode(message).finish()
        };
    }
};
function createBaseCreateTransferOperatorshipResponse() {
    return {};
}
export const CreateTransferOperatorshipResponse = {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCreateTransferOperatorshipResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCreateTransferOperatorshipResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CreateTransferOperatorshipResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateTransferOperatorshipResponse.decode(message.value);
    },
    toProto(message) {
        return CreateTransferOperatorshipResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse",
            value: CreateTransferOperatorshipResponse.encode(message).finish()
        };
    }
};
function createBaseSignCommandsRequest() {
    return {
        sender: new Uint8Array(),
        chain: ""
    };
}
export const SignCommandsRequest = {
    typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseSignCommandsRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignCommandsRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return SignCommandsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignCommandsRequest.decode(message.value);
    },
    toProto(message) {
        return SignCommandsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest",
            value: SignCommandsRequest.encode(message).finish()
        };
    }
};
function createBaseSignCommandsResponse() {
    return {
        batchedCommandsId: new Uint8Array(),
        commandCount: 0
    };
}
export const SignCommandsResponse = {
    typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchedCommandsId.length !== 0) {
            writer.uint32(10).bytes(message.batchedCommandsId);
        }
        if (message.commandCount !== 0) {
            writer.uint32(16).uint32(message.commandCount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            batchedCommandsId: isSet(object.batchedCommandsId) ? bytesFromBase64(object.batchedCommandsId) : new Uint8Array(),
            commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0
        };
    },
    fromPartial(object) {
        const message = createBaseSignCommandsResponse();
        message.batchedCommandsId = object.batchedCommandsId ?? new Uint8Array();
        message.commandCount = object.commandCount ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignCommandsResponse();
        if (object.batched_commands_id !== undefined && object.batched_commands_id !== null) {
            message.batchedCommandsId = bytesFromBase64(object.batched_commands_id);
        }
        if (object.command_count !== undefined && object.command_count !== null) {
            message.commandCount = object.command_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batched_commands_id = message.batchedCommandsId ? base64FromBytes(message.batchedCommandsId) : undefined;
        obj.command_count = message.commandCount;
        return obj;
    },
    fromAminoMsg(object) {
        return SignCommandsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignCommandsResponse.decode(message.value);
    },
    toProto(message) {
        return SignCommandsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse",
            value: SignCommandsResponse.encode(message).finish()
        };
    }
};
function createBaseAddChainRequest() {
    return {
        sender: new Uint8Array(),
        name: "",
        keyType: 0,
        params: new Uint8Array()
    };
}
export const AddChainRequest = {
    typeUrl: "/axelar.evm.v1beta1.AddChainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.keyType !== 0) {
            writer.uint32(32).int32(message.keyType);
        }
        if (message.params.length !== 0) {
            writer.uint32(42).bytes(message.params);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            name: isSet(object.name) ? String(object.name) : "",
            keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1,
            params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseAddChainRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.name = object.name ?? "";
        message.keyType = object.keyType ?? 0;
        message.params = object.params ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddChainRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.key_type !== undefined && object.key_type !== null) {
            message.keyType = keyTypeFromJSON(object.key_type);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = bytesFromBase64(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.name = message.name;
        obj.key_type = message.keyType;
        obj.params = message.params ? base64FromBytes(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AddChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddChainRequest.decode(message.value);
    },
    toProto(message) {
        return AddChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.AddChainRequest",
            value: AddChainRequest.encode(message).finish()
        };
    }
};
function createBaseAddChainResponse() {
    return {};
}
export const AddChainResponse = {
    typeUrl: "/axelar.evm.v1beta1.AddChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseAddChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAddChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return AddChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddChainResponse.decode(message.value);
    },
    toProto(message) {
        return AddChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.AddChainResponse",
            value: AddChainResponse.encode(message).finish()
        };
    }
};
function createBaseRetryFailedEventRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        eventId: ""
    };
}
export const RetryFailedEventRequest = {
    typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.eventId !== "") {
            writer.uint32(26).string(message.eventId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRetryFailedEventRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.eventId = object.eventId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRetryFailedEventRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.event_id !== undefined && object.event_id !== null) {
            message.eventId = object.event_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.event_id = message.eventId;
        return obj;
    },
    fromAminoMsg(object) {
        return RetryFailedEventRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RetryFailedEventRequest.decode(message.value);
    },
    toProto(message) {
        return RetryFailedEventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest",
            value: RetryFailedEventRequest.encode(message).finish()
        };
    }
};
function createBaseRetryFailedEventResponse() {
    return {};
}
export const RetryFailedEventResponse = {
    typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRetryFailedEventResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRetryFailedEventResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RetryFailedEventResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RetryFailedEventResponse.decode(message.value);
    },
    toProto(message) {
        return RetryFailedEventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse",
            value: RetryFailedEventResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map