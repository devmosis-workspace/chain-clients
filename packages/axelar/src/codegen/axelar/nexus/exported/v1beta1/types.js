import { keyTypeFromJSON } from "../../../tss/exported/v1beta1/types";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export var TransferState;
(function (TransferState) {
    TransferState[TransferState["TRANSFER_STATE_UNSPECIFIED"] = 0] = "TRANSFER_STATE_UNSPECIFIED";
    TransferState[TransferState["TRANSFER_STATE_PENDING"] = 1] = "TRANSFER_STATE_PENDING";
    TransferState[TransferState["TRANSFER_STATE_ARCHIVED"] = 2] = "TRANSFER_STATE_ARCHIVED";
    TransferState[TransferState["TRANSFER_STATE_INSUFFICIENT_AMOUNT"] = 3] = "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
    TransferState[TransferState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferState || (TransferState = {}));
export const TransferStateSDKType = TransferState;
export const TransferStateAmino = TransferState;
export function transferStateFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_STATE_UNSPECIFIED":
            return TransferState.TRANSFER_STATE_UNSPECIFIED;
        case 1:
        case "TRANSFER_STATE_PENDING":
            return TransferState.TRANSFER_STATE_PENDING;
        case 2:
        case "TRANSFER_STATE_ARCHIVED":
            return TransferState.TRANSFER_STATE_ARCHIVED;
        case 3:
        case "TRANSFER_STATE_INSUFFICIENT_AMOUNT":
            return TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferState.UNRECOGNIZED;
    }
}
export function transferStateToJSON(object) {
    switch (object) {
        case TransferState.TRANSFER_STATE_UNSPECIFIED:
            return "TRANSFER_STATE_UNSPECIFIED";
        case TransferState.TRANSFER_STATE_PENDING:
            return "TRANSFER_STATE_PENDING";
        case TransferState.TRANSFER_STATE_ARCHIVED:
            return "TRANSFER_STATE_ARCHIVED";
        case TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT:
            return "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
        case TransferState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var TransferDirection;
(function (TransferDirection) {
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_UNSPECIFIED"] = 0] = "TRANSFER_DIRECTION_UNSPECIFIED";
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_FROM"] = 1] = "TRANSFER_DIRECTION_FROM";
    TransferDirection[TransferDirection["TRANSFER_DIRECTION_TO"] = 2] = "TRANSFER_DIRECTION_TO";
    TransferDirection[TransferDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferDirection || (TransferDirection = {}));
export const TransferDirectionSDKType = TransferDirection;
export const TransferDirectionAmino = TransferDirection;
export function transferDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_DIRECTION_UNSPECIFIED":
            return TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED;
        case 1:
        case "TRANSFER_DIRECTION_FROM":
            return TransferDirection.TRANSFER_DIRECTION_FROM;
        case 2:
        case "TRANSFER_DIRECTION_TO":
            return TransferDirection.TRANSFER_DIRECTION_TO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferDirection.UNRECOGNIZED;
    }
}
export function transferDirectionToJSON(object) {
    switch (object) {
        case TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED:
            return "TRANSFER_DIRECTION_UNSPECIFIED";
        case TransferDirection.TRANSFER_DIRECTION_FROM:
            return "TRANSFER_DIRECTION_FROM";
        case TransferDirection.TRANSFER_DIRECTION_TO:
            return "TRANSFER_DIRECTION_TO";
        case TransferDirection.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var GeneralMessage_Status;
(function (GeneralMessage_Status) {
    GeneralMessage_Status[GeneralMessage_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_APPROVED"] = 1] = "STATUS_APPROVED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_PROCESSING"] = 2] = "STATUS_PROCESSING";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_EXECUTED"] = 3] = "STATUS_EXECUTED";
    GeneralMessage_Status[GeneralMessage_Status["STATUS_FAILED"] = 4] = "STATUS_FAILED";
    GeneralMessage_Status[GeneralMessage_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneralMessage_Status || (GeneralMessage_Status = {}));
export const GeneralMessage_StatusSDKType = GeneralMessage_Status;
export const GeneralMessage_StatusAmino = GeneralMessage_Status;
export function generalMessage_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return GeneralMessage_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_APPROVED":
            return GeneralMessage_Status.STATUS_APPROVED;
        case 2:
        case "STATUS_PROCESSING":
            return GeneralMessage_Status.STATUS_PROCESSING;
        case 3:
        case "STATUS_EXECUTED":
            return GeneralMessage_Status.STATUS_EXECUTED;
        case 4:
        case "STATUS_FAILED":
            return GeneralMessage_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GeneralMessage_Status.UNRECOGNIZED;
    }
}
export function generalMessage_StatusToJSON(object) {
    switch (object) {
        case GeneralMessage_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case GeneralMessage_Status.STATUS_APPROVED:
            return "STATUS_APPROVED";
        case GeneralMessage_Status.STATUS_PROCESSING:
            return "STATUS_PROCESSING";
        case GeneralMessage_Status.STATUS_EXECUTED:
            return "STATUS_EXECUTED";
        case GeneralMessage_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case GeneralMessage_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseChain() {
    return {
        name: "",
        supportsForeignAssets: false,
        keyType: 0,
        module: ""
    };
}
export const Chain = {
    typeUrl: "/axelar.nexus.exported.v1beta1.Chain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.supportsForeignAssets === true) {
            writer.uint32(24).bool(message.supportsForeignAssets);
        }
        if (message.keyType !== 0) {
            writer.uint32(32).int32(message.keyType);
        }
        if (message.module !== "") {
            writer.uint32(42).string(message.module);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            supportsForeignAssets: isSet(object.supportsForeignAssets) ? Boolean(object.supportsForeignAssets) : false,
            keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1,
            module: isSet(object.module) ? String(object.module) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChain();
        message.name = object.name ?? "";
        message.supportsForeignAssets = object.supportsForeignAssets ?? false;
        message.keyType = object.keyType ?? 0;
        message.module = object.module ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChain();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.supports_foreign_assets !== undefined && object.supports_foreign_assets !== null) {
            message.supportsForeignAssets = object.supports_foreign_assets;
        }
        if (object.key_type !== undefined && object.key_type !== null) {
            message.keyType = keyTypeFromJSON(object.key_type);
        }
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.supports_foreign_assets = message.supportsForeignAssets;
        obj.key_type = message.keyType;
        obj.module = message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return Chain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Chain.decode(message.value);
    },
    toProto(message) {
        return Chain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.Chain",
            value: Chain.encode(message).finish()
        };
    }
};
function createBaseCrossChainAddress() {
    return {
        chain: Chain.fromPartial({}),
        address: ""
    };
}
export const CrossChainAddress = {
    typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== undefined) {
            Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseCrossChainAddress();
        message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCrossChainAddress();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromAmino(object.chain);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return CrossChainAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CrossChainAddress.decode(message.value);
    },
    toProto(message) {
        return CrossChainAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainAddress",
            value: CrossChainAddress.encode(message).finish()
        };
    }
};
function createBaseCrossChainTransfer() {
    return {
        recipient: CrossChainAddress.fromPartial({}),
        asset: Coin.fromPartial({}),
        id: BigInt(0),
        state: 0
    };
}
export const CrossChainTransfer = {
    typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.recipient !== undefined) {
            CrossChainAddress.encode(message.recipient, writer.uint32(10).fork()).ldelim();
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined,
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            state: isSet(object.state) ? transferStateFromJSON(object.state) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseCrossChainTransfer();
        message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.state = object.state ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCrossChainTransfer();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = CrossChainAddress.fromAmino(object.recipient);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = transferStateFromJSON(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.state = message.state;
        return obj;
    },
    fromAminoMsg(object) {
        return CrossChainTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CrossChainTransfer.decode(message.value);
    },
    toProto(message) {
        return CrossChainTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.CrossChainTransfer",
            value: CrossChainTransfer.encode(message).finish()
        };
    }
};
function createBaseTransferFee() {
    return {
        coins: []
    };
}
export const TransferFee = {
    typeUrl: "/axelar.nexus.exported.v1beta1.TransferFee",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseTransferFee();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferFee();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TransferFee.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferFee.decode(message.value);
    },
    toProto(message) {
        return TransferFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.TransferFee",
            value: TransferFee.encode(message).finish()
        };
    }
};
function createBaseFeeInfo() {
    return {
        chain: "",
        asset: "",
        feeRate: new Uint8Array(),
        minFee: new Uint8Array(),
        maxFee: new Uint8Array()
    };
}
export const FeeInfo = {
    typeUrl: "/axelar.nexus.exported.v1beta1.FeeInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.feeRate.length !== 0) {
            writer.uint32(26).bytes(message.feeRate);
        }
        if (message.minFee.length !== 0) {
            writer.uint32(34).bytes(message.minFee);
        }
        if (message.maxFee.length !== 0) {
            writer.uint32(42).bytes(message.maxFee);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            feeRate: isSet(object.feeRate) ? bytesFromBase64(object.feeRate) : new Uint8Array(),
            minFee: isSet(object.minFee) ? bytesFromBase64(object.minFee) : new Uint8Array(),
            maxFee: isSet(object.maxFee) ? bytesFromBase64(object.maxFee) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseFeeInfo();
        message.chain = object.chain ?? "";
        message.asset = object.asset ?? "";
        message.feeRate = object.feeRate ?? new Uint8Array();
        message.minFee = object.minFee ?? new Uint8Array();
        message.maxFee = object.maxFee ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeInfo();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.fee_rate !== undefined && object.fee_rate !== null) {
            message.feeRate = bytesFromBase64(object.fee_rate);
        }
        if (object.min_fee !== undefined && object.min_fee !== null) {
            message.minFee = bytesFromBase64(object.min_fee);
        }
        if (object.max_fee !== undefined && object.max_fee !== null) {
            message.maxFee = bytesFromBase64(object.max_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.asset = message.asset;
        obj.fee_rate = message.feeRate ? base64FromBytes(message.feeRate) : undefined;
        obj.min_fee = message.minFee ? base64FromBytes(message.minFee) : undefined;
        obj.max_fee = message.maxFee ? base64FromBytes(message.maxFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeInfo.decode(message.value);
    },
    toProto(message) {
        return FeeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.FeeInfo",
            value: FeeInfo.encode(message).finish()
        };
    }
};
function createBaseAsset() {
    return {
        denom: "",
        isNativeAsset: false
    };
}
export const Asset = {
    typeUrl: "/axelar.nexus.exported.v1beta1.Asset",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.isNativeAsset === true) {
            writer.uint32(24).bool(message.isNativeAsset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            isNativeAsset: isSet(object.isNativeAsset) ? Boolean(object.isNativeAsset) : false
        };
    },
    fromPartial(object) {
        const message = createBaseAsset();
        message.denom = object.denom ?? "";
        message.isNativeAsset = object.isNativeAsset ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAsset();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.is_native_asset !== undefined && object.is_native_asset !== null) {
            message.isNativeAsset = object.is_native_asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.is_native_asset = message.isNativeAsset;
        return obj;
    },
    fromAminoMsg(object) {
        return Asset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Asset.decode(message.value);
    },
    toProto(message) {
        return Asset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.Asset",
            value: Asset.encode(message).finish()
        };
    }
};
function createBaseGeneralMessage() {
    return {
        id: "",
        sender: CrossChainAddress.fromPartial({}),
        recipient: CrossChainAddress.fromPartial({}),
        payloadHash: new Uint8Array(),
        status: 0,
        asset: undefined,
        sourceTxId: new Uint8Array(),
        sourceTxIndex: BigInt(0)
    };
}
export const GeneralMessage = {
    typeUrl: "/axelar.nexus.exported.v1beta1.GeneralMessage",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== undefined) {
            CrossChainAddress.encode(message.sender, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== undefined) {
            CrossChainAddress.encode(message.recipient, writer.uint32(26).fork()).ldelim();
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.asset !== undefined) {
            Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
        }
        if (message.sourceTxId.length !== 0) {
            writer.uint32(58).bytes(message.sourceTxId);
        }
        if (message.sourceTxIndex !== BigInt(0)) {
            writer.uint32(64).uint64(message.sourceTxIndex);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            sender: isSet(object.sender) ? CrossChainAddress.fromJSON(object.sender) : undefined,
            recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined,
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            status: isSet(object.status) ? generalMessage_StatusFromJSON(object.status) : -1,
            asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
            sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
            sourceTxIndex: isSet(object.sourceTxIndex) ? BigInt(object.sourceTxIndex.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGeneralMessage();
        message.id = object.id ?? "";
        message.sender = object.sender !== undefined && object.sender !== null ? CrossChainAddress.fromPartial(object.sender) : undefined;
        message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.status = object.status ?? 0;
        message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
        message.sourceTxId = object.sourceTxId ?? new Uint8Array();
        message.sourceTxIndex = object.sourceTxIndex !== undefined && object.sourceTxIndex !== null ? BigInt(object.sourceTxIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeneralMessage();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = CrossChainAddress.fromAmino(object.sender);
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = CrossChainAddress.fromAmino(object.recipient);
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = generalMessage_StatusFromJSON(object.status);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Coin.fromAmino(object.asset);
        }
        if (object.source_tx_id !== undefined && object.source_tx_id !== null) {
            message.sourceTxId = bytesFromBase64(object.source_tx_id);
        }
        if (object.source_tx_index !== undefined && object.source_tx_index !== null) {
            message.sourceTxIndex = BigInt(object.source_tx_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.sender = message.sender ? CrossChainAddress.toAmino(message.sender) : undefined;
        obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.status = message.status;
        obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
        obj.source_tx_id = message.sourceTxId ? base64FromBytes(message.sourceTxId) : undefined;
        obj.source_tx_index = message.sourceTxIndex ? message.sourceTxIndex.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GeneralMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GeneralMessage.decode(message.value);
    },
    toProto(message) {
        return GeneralMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.GeneralMessage",
            value: GeneralMessage.encode(message).finish()
        };
    }
};
function createBaseWasmMessage() {
    return {
        sourceChain: "",
        sourceAddress: "",
        destinationChain: "",
        destinationAddress: "",
        payloadHash: new Uint8Array(),
        sourceTxId: new Uint8Array(),
        sourceTxIndex: BigInt(0),
        sender: new Uint8Array()
    };
}
export const WasmMessage = {
    typeUrl: "/axelar.nexus.exported.v1beta1.WasmMessage",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sourceChain !== "") {
            writer.uint32(10).string(message.sourceChain);
        }
        if (message.sourceAddress !== "") {
            writer.uint32(18).string(message.sourceAddress);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(34).string(message.destinationAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(42).bytes(message.payloadHash);
        }
        if (message.sourceTxId.length !== 0) {
            writer.uint32(50).bytes(message.sourceTxId);
        }
        if (message.sourceTxIndex !== BigInt(0)) {
            writer.uint32(56).uint64(message.sourceTxIndex);
        }
        if (message.sender.length !== 0) {
            writer.uint32(66).bytes(message.sender);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            sourceAddress: isSet(object.sourceAddress) ? String(object.sourceAddress) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            sourceTxId: isSet(object.sourceTxId) ? bytesFromBase64(object.sourceTxId) : new Uint8Array(),
            sourceTxIndex: isSet(object.sourceTxIndex) ? BigInt(object.sourceTxIndex.toString()) : BigInt(0),
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseWasmMessage();
        message.sourceChain = object.sourceChain ?? "";
        message.sourceAddress = object.sourceAddress ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.sourceTxId = object.sourceTxId ?? new Uint8Array();
        message.sourceTxIndex = object.sourceTxIndex !== undefined && object.sourceTxIndex !== null ? BigInt(object.sourceTxIndex.toString()) : BigInt(0);
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseWasmMessage();
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.source_address !== undefined && object.source_address !== null) {
            message.sourceAddress = object.source_address;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.destination_address !== undefined && object.destination_address !== null) {
            message.destinationAddress = object.destination_address;
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        if (object.source_tx_id !== undefined && object.source_tx_id !== null) {
            message.sourceTxId = bytesFromBase64(object.source_tx_id);
        }
        if (object.source_tx_index !== undefined && object.source_tx_index !== null) {
            message.sourceTxIndex = BigInt(object.source_tx_index);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_chain = message.sourceChain;
        obj.source_address = message.sourceAddress;
        obj.destination_chain = message.destinationChain;
        obj.destination_address = message.destinationAddress;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.source_tx_id = message.sourceTxId ? base64FromBytes(message.sourceTxId) : undefined;
        obj.source_tx_index = message.sourceTxIndex ? message.sourceTxIndex.toString() : undefined;
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return WasmMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WasmMessage.decode(message.value);
    },
    toProto(message) {
        return WasmMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.exported.v1beta1.WasmMessage",
            value: WasmMessage.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map