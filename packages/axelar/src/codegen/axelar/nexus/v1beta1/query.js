import { CrossChainTransfer, FeeInfo, GeneralMessage, transferStateFromJSON } from "../exported/v1beta1/types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ChainState } from "./types";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export var ChainStatus;
(function (ChainStatus) {
    ChainStatus[ChainStatus["CHAIN_STATUS_UNSPECIFIED"] = 0] = "CHAIN_STATUS_UNSPECIFIED";
    ChainStatus[ChainStatus["CHAIN_STATUS_ACTIVATED"] = 1] = "CHAIN_STATUS_ACTIVATED";
    ChainStatus[ChainStatus["CHAIN_STATUS_DEACTIVATED"] = 2] = "CHAIN_STATUS_DEACTIVATED";
    ChainStatus[ChainStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChainStatus || (ChainStatus = {}));
export const ChainStatusSDKType = ChainStatus;
export const ChainStatusAmino = ChainStatus;
export function chainStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "CHAIN_STATUS_UNSPECIFIED":
            return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
        case 1:
        case "CHAIN_STATUS_ACTIVATED":
            return ChainStatus.CHAIN_STATUS_ACTIVATED;
        case 2:
        case "CHAIN_STATUS_DEACTIVATED":
            return ChainStatus.CHAIN_STATUS_DEACTIVATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChainStatus.UNRECOGNIZED;
    }
}
export function chainStatusToJSON(object) {
    switch (object) {
        case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
            return "CHAIN_STATUS_UNSPECIFIED";
        case ChainStatus.CHAIN_STATUS_ACTIVATED:
            return "CHAIN_STATUS_ACTIVATED";
        case ChainStatus.CHAIN_STATUS_DEACTIVATED:
            return "CHAIN_STATUS_DEACTIVATED";
        case ChainStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseChainMaintainersRequest() {
    return {
        chain: ""
    };
}
export const ChainMaintainersRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainMaintainersRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainMaintainersRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainMaintainersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainMaintainersRequest.decode(message.value);
    },
    toProto(message) {
        return ChainMaintainersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest",
            value: ChainMaintainersRequest.encode(message).finish()
        };
    }
};
function createBaseChainMaintainersResponse() {
    return {
        maintainers: []
    };
}
export const ChainMaintainersResponse = {
    typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.maintainers) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            maintainers: Array.isArray(object?.maintainers) ? object.maintainers.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseChainMaintainersResponse();
        message.maintainers = object.maintainers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainMaintainersResponse();
        message.maintainers = object.maintainers?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.maintainers) {
            obj.maintainers = message.maintainers.map(e => base64FromBytes(e));
        }
        else {
            obj.maintainers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ChainMaintainersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainMaintainersResponse.decode(message.value);
    },
    toProto(message) {
        return ChainMaintainersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse",
            value: ChainMaintainersResponse.encode(message).finish()
        };
    }
};
function createBaseLatestDepositAddressRequest() {
    return {
        recipientAddr: "",
        recipientChain: "",
        depositChain: ""
    };
}
export const LatestDepositAddressRequest = {
    typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.recipientAddr !== "") {
            writer.uint32(10).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        if (message.depositChain !== "") {
            writer.uint32(26).string(message.depositChain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseLatestDepositAddressRequest();
        message.recipientAddr = object.recipientAddr ?? "";
        message.recipientChain = object.recipientChain ?? "";
        message.depositChain = object.depositChain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLatestDepositAddressRequest();
        if (object.recipient_addr !== undefined && object.recipient_addr !== null) {
            message.recipientAddr = object.recipient_addr;
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        if (object.deposit_chain !== undefined && object.deposit_chain !== null) {
            message.depositChain = object.deposit_chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient_addr = message.recipientAddr;
        obj.recipient_chain = message.recipientChain;
        obj.deposit_chain = message.depositChain;
        return obj;
    },
    fromAminoMsg(object) {
        return LatestDepositAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LatestDepositAddressRequest.decode(message.value);
    },
    toProto(message) {
        return LatestDepositAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest",
            value: LatestDepositAddressRequest.encode(message).finish()
        };
    }
};
function createBaseLatestDepositAddressResponse() {
    return {
        depositAddr: ""
    };
}
export const LatestDepositAddressResponse = {
    typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse",
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
        const message = createBaseLatestDepositAddressResponse();
        message.depositAddr = object.depositAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLatestDepositAddressResponse();
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
        return LatestDepositAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LatestDepositAddressResponse.decode(message.value);
    },
    toProto(message) {
        return LatestDepositAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse",
            value: LatestDepositAddressResponse.encode(message).finish()
        };
    }
};
function createBaseTransfersForChainRequest() {
    return {
        chain: "",
        state: 0,
        pagination: undefined
    };
}
export const TransfersForChainRequest = {
    typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            state: isSet(object.state) ? transferStateFromJSON(object.state) : -1,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTransfersForChainRequest();
        message.chain = object.chain ?? "";
        message.state = object.state ?? 0;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransfersForChainRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = transferStateFromJSON(object.state);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.state = message.state;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransfersForChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransfersForChainRequest.decode(message.value);
    },
    toProto(message) {
        return TransfersForChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest",
            value: TransfersForChainRequest.encode(message).finish()
        };
    }
};
function createBaseTransfersForChainResponse() {
    return {
        transfers: [],
        pagination: undefined
    };
}
export const TransfersForChainResponse = {
    typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.transfers) {
            CrossChainTransfer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            transfers: Array.isArray(object?.transfers) ? object.transfers.map((e) => CrossChainTransfer.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTransfersForChainResponse();
        message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransfersForChainResponse();
        message.transfers = object.transfers?.map(e => CrossChainTransfer.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toAmino(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransfersForChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransfersForChainResponse.decode(message.value);
    },
    toProto(message) {
        return TransfersForChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse",
            value: TransfersForChainResponse.encode(message).finish()
        };
    }
};
function createBaseFeeInfoRequest() {
    return {
        chain: "",
        asset: ""
    };
}
export const FeeInfoRequest = {
    typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseFeeInfoRequest();
        message.chain = object.chain ?? "";
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeInfoRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return FeeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest",
            value: FeeInfoRequest.encode(message).finish()
        };
    }
};
function createBaseFeeInfoResponse() {
    return {
        feeInfo: undefined
    };
}
export const FeeInfoResponse = {
    typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feeInfo !== undefined) {
            FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseFeeInfoResponse();
        message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeInfoResponse();
        if (object.fee_info !== undefined && object.fee_info !== null) {
            message.feeInfo = FeeInfo.fromAmino(object.fee_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_info = message.feeInfo ? FeeInfo.toAmino(message.feeInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return FeeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse",
            value: FeeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseTransferFeeRequest() {
    return {
        sourceChain: "",
        destinationChain: "",
        amount: ""
    };
}
export const TransferFeeRequest = {
    typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sourceChain !== "") {
            writer.uint32(10).string(message.sourceChain);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseTransferFeeRequest();
        message.sourceChain = object.sourceChain ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferFeeRequest();
        if (object.source_chain !== undefined && object.source_chain !== null) {
            message.sourceChain = object.source_chain;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_chain = message.sourceChain;
        obj.destination_chain = message.destinationChain;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferFeeRequest.decode(message.value);
    },
    toProto(message) {
        return TransferFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest",
            value: TransferFeeRequest.encode(message).finish()
        };
    }
};
function createBaseTransferFeeResponse() {
    return {
        fee: Coin.fromPartial({})
    };
}
export const TransferFeeResponse = {
    typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTransferFeeResponse();
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferFeeResponse();
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferFeeResponse.decode(message.value);
    },
    toProto(message) {
        return TransferFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse",
            value: TransferFeeResponse.encode(message).finish()
        };
    }
};
function createBaseChainsRequest() {
    return {
        status: 0
    };
}
export const ChainsRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ChainsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? chainStatusFromJSON(object.status) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseChainsRequest();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = chainStatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsRequest.decode(message.value);
    },
    toProto(message) {
        return ChainsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainsRequest",
            value: ChainsRequest.encode(message).finish()
        };
    }
};
function createBaseChainsResponse() {
    return {
        chains: []
    };
}
export const ChainsResponse = {
    typeUrl: "/axelar.nexus.v1beta1.ChainsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.chains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseChainsResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsResponse.decode(message.value);
    },
    toProto(message) {
        return ChainsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainsResponse",
            value: ChainsResponse.encode(message).finish()
        };
    }
};
function createBaseAssetsRequest() {
    return {
        chain: ""
    };
}
export const AssetsRequest = {
    typeUrl: "/axelar.nexus.v1beta1.AssetsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseAssetsRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetsRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AssetsRequest.decode(message.value);
    },
    toProto(message) {
        return AssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.AssetsRequest",
            value: AssetsRequest.encode(message).finish()
        };
    }
};
function createBaseAssetsResponse() {
    return {
        assets: []
    };
}
export const AssetsResponse = {
    typeUrl: "/axelar.nexus.v1beta1.AssetsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseAssetsResponse();
        message.assets = object.assets?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAssetsResponse();
        message.assets = object.assets?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AssetsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AssetsResponse.decode(message.value);
    },
    toProto(message) {
        return AssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.AssetsResponse",
            value: AssetsResponse.encode(message).finish()
        };
    }
};
function createBaseChainStateRequest() {
    return {
        chain: ""
    };
}
export const ChainStateRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainStateRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainStateRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainStateRequest.decode(message.value);
    },
    toProto(message) {
        return ChainStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest",
            value: ChainStateRequest.encode(message).finish()
        };
    }
};
function createBaseChainStateResponse() {
    return {
        state: ChainState.fromPartial({})
    };
}
export const ChainStateResponse = {
    typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            ChainState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            state: isSet(object.state) ? ChainState.fromJSON(object.state) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseChainStateResponse();
        message.state = object.state !== undefined && object.state !== null ? ChainState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = ChainState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? ChainState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainStateResponse.decode(message.value);
    },
    toProto(message) {
        return ChainStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse",
            value: ChainStateResponse.encode(message).finish()
        };
    }
};
function createBaseChainsByAssetRequest() {
    return {
        asset: ""
    };
}
export const ChainsByAssetRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainsByAssetRequest();
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsByAssetRequest();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsByAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsByAssetRequest.decode(message.value);
    },
    toProto(message) {
        return ChainsByAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest",
            value: ChainsByAssetRequest.encode(message).finish()
        };
    }
};
function createBaseChainsByAssetResponse() {
    return {
        chains: []
    };
}
export const ChainsByAssetResponse = {
    typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.chains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseChainsByAssetResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainsByAssetResponse();
        message.chains = object.chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.chains) {
            obj.chains = message.chains.map(e => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ChainsByAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainsByAssetResponse.decode(message.value);
    },
    toProto(message) {
        return ChainsByAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse",
            value: ChainsByAssetResponse.encode(message).finish()
        };
    }
};
function createBaseRecipientAddressRequest() {
    return {
        depositAddr: "",
        depositChain: ""
    };
}
export const RecipientAddressRequest = {
    typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        if (message.depositChain !== "") {
            writer.uint32(18).string(message.depositChain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
            depositChain: isSet(object.depositChain) ? String(object.depositChain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRecipientAddressRequest();
        message.depositAddr = object.depositAddr ?? "";
        message.depositChain = object.depositChain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecipientAddressRequest();
        if (object.deposit_addr !== undefined && object.deposit_addr !== null) {
            message.depositAddr = object.deposit_addr;
        }
        if (object.deposit_chain !== undefined && object.deposit_chain !== null) {
            message.depositChain = object.deposit_chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_addr = message.depositAddr;
        obj.deposit_chain = message.depositChain;
        return obj;
    },
    fromAminoMsg(object) {
        return RecipientAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RecipientAddressRequest.decode(message.value);
    },
    toProto(message) {
        return RecipientAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest",
            value: RecipientAddressRequest.encode(message).finish()
        };
    }
};
function createBaseRecipientAddressResponse() {
    return {
        recipientAddr: "",
        recipientChain: ""
    };
}
export const RecipientAddressResponse = {
    typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.recipientAddr !== "") {
            writer.uint32(10).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(18).string(message.recipientChain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRecipientAddressResponse();
        message.recipientAddr = object.recipientAddr ?? "";
        message.recipientChain = object.recipientChain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecipientAddressResponse();
        if (object.recipient_addr !== undefined && object.recipient_addr !== null) {
            message.recipientAddr = object.recipient_addr;
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient_addr = message.recipientAddr;
        obj.recipient_chain = message.recipientChain;
        return obj;
    },
    fromAminoMsg(object) {
        return RecipientAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RecipientAddressResponse.decode(message.value);
    },
    toProto(message) {
        return RecipientAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse",
            value: RecipientAddressResponse.encode(message).finish()
        };
    }
};
function createBaseTransferRateLimitRequest() {
    return {
        chain: "",
        asset: ""
    };
}
export const TransferRateLimitRequest = {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseTransferRateLimitRequest();
        message.chain = object.chain ?? "";
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferRateLimitRequest();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.asset = message.asset;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferRateLimitRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferRateLimitRequest.decode(message.value);
    },
    toProto(message) {
        return TransferRateLimitRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest",
            value: TransferRateLimitRequest.encode(message).finish()
        };
    }
};
function createBaseTransferRateLimitResponse() {
    return {
        transferRateLimit: undefined
    };
}
export const TransferRateLimitResponse = {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.transferRateLimit !== undefined) {
            TransferRateLimit.encode(message.transferRateLimit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            transferRateLimit: isSet(object.transferRateLimit) ? TransferRateLimit.fromJSON(object.transferRateLimit) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseTransferRateLimitResponse();
        message.transferRateLimit = object.transferRateLimit !== undefined && object.transferRateLimit !== null ? TransferRateLimit.fromPartial(object.transferRateLimit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferRateLimitResponse();
        if (object.transfer_rate_limit !== undefined && object.transfer_rate_limit !== null) {
            message.transferRateLimit = TransferRateLimit.fromAmino(object.transfer_rate_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transfer_rate_limit = message.transferRateLimit ? TransferRateLimit.toAmino(message.transferRateLimit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferRateLimitResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferRateLimitResponse.decode(message.value);
    },
    toProto(message) {
        return TransferRateLimitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse",
            value: TransferRateLimitResponse.encode(message).finish()
        };
    }
};
function createBaseTransferRateLimit() {
    return {
        limit: new Uint8Array(),
        window: Duration.fromPartial({}),
        incoming: new Uint8Array(),
        outgoing: new Uint8Array(),
        timeLeft: Duration.fromPartial({}),
        from: new Uint8Array(),
        to: new Uint8Array()
    };
}
export const TransferRateLimit = {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.limit.length !== 0) {
            writer.uint32(10).bytes(message.limit);
        }
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(18).fork()).ldelim();
        }
        if (message.incoming.length !== 0) {
            writer.uint32(26).bytes(message.incoming);
        }
        if (message.outgoing.length !== 0) {
            writer.uint32(34).bytes(message.outgoing);
        }
        if (message.timeLeft !== undefined) {
            Duration.encode(message.timeLeft, writer.uint32(42).fork()).ldelim();
        }
        if (message.from.length !== 0) {
            writer.uint32(50).bytes(message.from);
        }
        if (message.to.length !== 0) {
            writer.uint32(58).bytes(message.to);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
            window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined,
            incoming: isSet(object.incoming) ? bytesFromBase64(object.incoming) : new Uint8Array(),
            outgoing: isSet(object.outgoing) ? bytesFromBase64(object.outgoing) : new Uint8Array(),
            timeLeft: isSet(object.timeLeft) ? Duration.fromJSON(object.timeLeft) : undefined,
            from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(),
            to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseTransferRateLimit();
        message.limit = object.limit ?? new Uint8Array();
        message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
        message.incoming = object.incoming ?? new Uint8Array();
        message.outgoing = object.outgoing ?? new Uint8Array();
        message.timeLeft = object.timeLeft !== undefined && object.timeLeft !== null ? Duration.fromPartial(object.timeLeft) : undefined;
        message.from = object.from ?? new Uint8Array();
        message.to = object.to ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferRateLimit();
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = bytesFromBase64(object.limit);
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = Duration.fromAmino(object.window);
        }
        if (object.incoming !== undefined && object.incoming !== null) {
            message.incoming = bytesFromBase64(object.incoming);
        }
        if (object.outgoing !== undefined && object.outgoing !== null) {
            message.outgoing = bytesFromBase64(object.outgoing);
        }
        if (object.time_left !== undefined && object.time_left !== null) {
            message.timeLeft = Duration.fromAmino(object.time_left);
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = bytesFromBase64(object.from);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = bytesFromBase64(object.to);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.limit = message.limit ? base64FromBytes(message.limit) : undefined;
        obj.window = message.window ? Duration.toAmino(message.window) : undefined;
        obj.incoming = message.incoming ? base64FromBytes(message.incoming) : undefined;
        obj.outgoing = message.outgoing ? base64FromBytes(message.outgoing) : undefined;
        obj.time_left = message.timeLeft ? Duration.toAmino(message.timeLeft) : undefined;
        obj.from = message.from ? base64FromBytes(message.from) : undefined;
        obj.to = message.to ? base64FromBytes(message.to) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferRateLimit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferRateLimit.decode(message.value);
    },
    toProto(message) {
        return TransferRateLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit",
            value: TransferRateLimit.encode(message).finish()
        };
    }
};
function createBaseMessageRequest() {
    return {
        id: ""
    };
}
export const MessageRequest = {
    typeUrl: "/axelar.nexus.v1beta1.MessageRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMessageRequest();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageRequest.decode(message.value);
    },
    toProto(message) {
        return MessageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageRequest",
            value: MessageRequest.encode(message).finish()
        };
    }
};
function createBaseMessageResponse() {
    return {
        message: GeneralMessage.fromPartial({})
    };
}
export const MessageResponse = {
    typeUrl: "/axelar.nexus.v1beta1.MessageResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== undefined) {
            GeneralMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            message: isSet(object.message) ? GeneralMessage.fromJSON(object.message) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseMessageResponse();
        message.message = object.message !== undefined && object.message !== null ? GeneralMessage.fromPartial(object.message) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageResponse();
        if (object.message !== undefined && object.message !== null) {
            message.message = GeneralMessage.fromAmino(object.message);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message ? GeneralMessage.toAmino(message.message) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MessageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MessageResponse.decode(message.value);
    },
    toProto(message) {
        return MessageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MessageResponse",
            value: MessageResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.nexus.v1beta1.ParamsRequest",
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
            typeUrl: "/axelar.nexus.v1beta1.ParamsRequest",
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
    typeUrl: "/axelar.nexus.v1beta1.ParamsResponse",
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
            typeUrl: "/axelar.nexus.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map