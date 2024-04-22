import { Chain, Asset } from "../../nexus/exported/v1beta1/types";
import { Duration } from "../../../google/protobuf/duration";
import { Fee } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseLinkRequest() {
    return {
        sender: new Uint8Array(),
        recipientAddr: "",
        recipientChain: "",
        asset: ""
    };
}
export const LinkRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.recipientAddr !== "") {
            writer.uint32(18).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(26).string(message.recipientChain);
        }
        if (message.asset !== "") {
            writer.uint32(34).string(message.asset);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseLinkRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.recipientAddr = object.recipientAddr ?? "";
        message.recipientChain = object.recipientChain ?? "";
        message.asset = object.asset ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLinkRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.recipient_addr !== undefined && object.recipient_addr !== null) {
            message.recipientAddr = object.recipient_addr;
        }
        if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
            message.recipientChain = object.recipient_chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.recipient_addr = message.recipientAddr;
        obj.recipient_chain = message.recipientChain;
        obj.asset = message.asset;
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
            typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest",
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
    typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse",
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
            typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse",
            value: LinkResponse.encode(message).finish()
        };
    }
};
function createBaseConfirmDepositRequest() {
    return {
        sender: new Uint8Array(),
        depositAddress: new Uint8Array(),
        denom: ""
    };
}
export const ConfirmDepositRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.depositAddress.length !== 0) {
            writer.uint32(34).bytes(message.depositAddress);
        }
        if (message.denom !== "") {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            depositAddress: isSet(object.depositAddress) ? bytesFromBase64(object.depositAddress) : new Uint8Array(),
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseConfirmDepositRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.depositAddress = object.depositAddress ?? new Uint8Array();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfirmDepositRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.deposit_address !== undefined && object.deposit_address !== null) {
            message.depositAddress = bytesFromBase64(object.deposit_address);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.deposit_address = message.depositAddress ? base64FromBytes(message.depositAddress) : undefined;
        obj.denom = message.denom;
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
            typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest",
            value: ConfirmDepositRequest.encode(message).finish()
        };
    }
};
function createBaseConfirmDepositResponse() {
    return {};
}
export const ConfirmDepositResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse",
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
            typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse",
            value: ConfirmDepositResponse.encode(message).finish()
        };
    }
};
function createBaseExecutePendingTransfersRequest() {
    return {
        sender: new Uint8Array()
    };
}
export const ExecutePendingTransfersRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseExecutePendingTransfersRequest();
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExecutePendingTransfersRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExecutePendingTransfersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExecutePendingTransfersRequest.decode(message.value);
    },
    toProto(message) {
        return ExecutePendingTransfersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest",
            value: ExecutePendingTransfersRequest.encode(message).finish()
        };
    }
};
function createBaseExecutePendingTransfersResponse() {
    return {};
}
export const ExecutePendingTransfersResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseExecutePendingTransfersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseExecutePendingTransfersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ExecutePendingTransfersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExecutePendingTransfersResponse.decode(message.value);
    },
    toProto(message) {
        return ExecutePendingTransfersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse",
            value: ExecutePendingTransfersResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterIBCPathRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        path: ""
    };
}
export const RegisterIBCPathRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            path: isSet(object.path) ? String(object.path) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterIBCPathRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.path = object.path ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterIBCPathRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.path = message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterIBCPathRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterIBCPathRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterIBCPathRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest",
            value: RegisterIBCPathRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterIBCPathResponse() {
    return {};
}
export const RegisterIBCPathResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterIBCPathResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterIBCPathResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterIBCPathResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterIBCPathResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterIBCPathResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse",
            value: RegisterIBCPathResponse.encode(message).finish()
        };
    }
};
function createBaseAddCosmosBasedChainRequest() {
    return {
        sender: new Uint8Array(),
        chain: Chain.fromPartial({}),
        addrPrefix: "",
        nativeAssets: [],
        cosmosChain: "",
        ibcPath: ""
    };
}
export const AddCosmosBasedChainRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== undefined) {
            Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.addrPrefix !== "") {
            writer.uint32(26).string(message.addrPrefix);
        }
        for (const v of message.nativeAssets) {
            Asset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.cosmosChain !== "") {
            writer.uint32(50).string(message.cosmosChain);
        }
        if (message.ibcPath !== "") {
            writer.uint32(58).string(message.ibcPath);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
            addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
            nativeAssets: Array.isArray(object?.nativeAssets) ? object.nativeAssets.map((e) => Asset.fromJSON(e)) : [],
            cosmosChain: isSet(object.cosmosChain) ? String(object.cosmosChain) : "",
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseAddCosmosBasedChainRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
        message.addrPrefix = object.addrPrefix ?? "";
        message.nativeAssets = object.nativeAssets?.map(e => Asset.fromPartial(e)) || [];
        message.cosmosChain = object.cosmosChain ?? "";
        message.ibcPath = object.ibcPath ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddCosmosBasedChainRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromAmino(object.chain);
        }
        if (object.addr_prefix !== undefined && object.addr_prefix !== null) {
            message.addrPrefix = object.addr_prefix;
        }
        message.nativeAssets = object.native_assets?.map(e => Asset.fromAmino(e)) || [];
        if (object.cosmos_chain !== undefined && object.cosmos_chain !== null) {
            message.cosmosChain = object.cosmos_chain;
        }
        if (object.ibc_path !== undefined && object.ibc_path !== null) {
            message.ibcPath = object.ibc_path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
        obj.addr_prefix = message.addrPrefix;
        if (message.nativeAssets) {
            obj.native_assets = message.nativeAssets.map(e => e ? Asset.toAmino(e) : undefined);
        }
        else {
            obj.native_assets = [];
        }
        obj.cosmos_chain = message.cosmosChain;
        obj.ibc_path = message.ibcPath;
        return obj;
    },
    fromAminoMsg(object) {
        return AddCosmosBasedChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddCosmosBasedChainRequest.decode(message.value);
    },
    toProto(message) {
        return AddCosmosBasedChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest",
            value: AddCosmosBasedChainRequest.encode(message).finish()
        };
    }
};
function createBaseAddCosmosBasedChainResponse() {
    return {};
}
export const AddCosmosBasedChainResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseAddCosmosBasedChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseAddCosmosBasedChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return AddCosmosBasedChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddCosmosBasedChainResponse.decode(message.value);
    },
    toProto(message) {
        return AddCosmosBasedChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse",
            value: AddCosmosBasedChainResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterAssetRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        asset: Asset.fromPartial({}),
        limit: new Uint8Array(),
        window: Duration.fromPartial({})
    };
}
export const RegisterAssetRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest",
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
        if (message.limit.length !== 0) {
            writer.uint32(34).bytes(message.limit);
        }
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
            limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
            window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterAssetRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
        message.limit = object.limit ?? new Uint8Array();
        message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterAssetRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Asset.fromAmino(object.asset);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = bytesFromBase64(object.limit);
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = Duration.fromAmino(object.window);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        obj.limit = message.limit ? base64FromBytes(message.limit) : undefined;
        obj.window = message.window ? Duration.toAmino(message.window) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterAssetRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest",
            value: RegisterAssetRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterAssetResponse() {
    return {};
}
export const RegisterAssetResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterAssetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterAssetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterAssetResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse",
            value: RegisterAssetResponse.encode(message).finish()
        };
    }
};
function createBaseRouteIBCTransfersRequest() {
    return {
        sender: new Uint8Array()
    };
}
export const RouteIBCTransfersRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRouteIBCTransfersRequest();
        message.sender = object.sender ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRouteIBCTransfersRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RouteIBCTransfersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RouteIBCTransfersRequest.decode(message.value);
    },
    toProto(message) {
        return RouteIBCTransfersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest",
            value: RouteIBCTransfersRequest.encode(message).finish()
        };
    }
};
function createBaseRouteIBCTransfersResponse() {
    return {};
}
export const RouteIBCTransfersResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRouteIBCTransfersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRouteIBCTransfersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RouteIBCTransfersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RouteIBCTransfersResponse.decode(message.value);
    },
    toProto(message) {
        return RouteIBCTransfersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse",
            value: RouteIBCTransfersResponse.encode(message).finish()
        };
    }
};
function createBaseRegisterFeeCollectorRequest() {
    return {
        sender: new Uint8Array(),
        feeCollector: new Uint8Array()
    };
}
export const RegisterFeeCollectorRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.feeCollector.length !== 0) {
            writer.uint32(18).bytes(message.feeCollector);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            feeCollector: isSet(object.feeCollector) ? bytesFromBase64(object.feeCollector) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRegisterFeeCollectorRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.feeCollector = object.feeCollector ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterFeeCollectorRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.fee_collector !== undefined && object.fee_collector !== null) {
            message.feeCollector = bytesFromBase64(object.fee_collector);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.fee_collector = message.feeCollector ? base64FromBytes(message.feeCollector) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterFeeCollectorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterFeeCollectorRequest.decode(message.value);
    },
    toProto(message) {
        return RegisterFeeCollectorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest",
            value: RegisterFeeCollectorRequest.encode(message).finish()
        };
    }
};
function createBaseRegisterFeeCollectorResponse() {
    return {};
}
export const RegisterFeeCollectorResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRegisterFeeCollectorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRegisterFeeCollectorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterFeeCollectorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterFeeCollectorResponse.decode(message.value);
    },
    toProto(message) {
        return RegisterFeeCollectorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse",
            value: RegisterFeeCollectorResponse.encode(message).finish()
        };
    }
};
function createBaseRetryIBCTransferRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        id: BigInt(0)
    };
}
export const RetryIBCTransferRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseRetryIBCTransferRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRetryIBCTransferRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RetryIBCTransferRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RetryIBCTransferRequest.decode(message.value);
    },
    toProto(message) {
        return RetryIBCTransferRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest",
            value: RetryIBCTransferRequest.encode(message).finish()
        };
    }
};
function createBaseRetryIBCTransferResponse() {
    return {};
}
export const RetryIBCTransferResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRetryIBCTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRetryIBCTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RetryIBCTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RetryIBCTransferResponse.decode(message.value);
    },
    toProto(message) {
        return RetryIBCTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse",
            value: RetryIBCTransferResponse.encode(message).finish()
        };
    }
};
function createBaseRouteMessageRequest() {
    return {
        sender: new Uint8Array(),
        id: "",
        payload: new Uint8Array(),
        feegranter: new Uint8Array()
    };
}
export const RouteMessageRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.payload.length !== 0) {
            writer.uint32(26).bytes(message.payload);
        }
        if (message.feegranter.length !== 0) {
            writer.uint32(34).bytes(message.feegranter);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            id: isSet(object.id) ? String(object.id) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            feegranter: isSet(object.feegranter) ? bytesFromBase64(object.feegranter) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseRouteMessageRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.id = object.id ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.feegranter = object.feegranter ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRouteMessageRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.feegranter !== undefined && object.feegranter !== null) {
            message.feegranter = bytesFromBase64(object.feegranter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.id = message.id;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.feegranter = message.feegranter ? base64FromBytes(message.feegranter) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RouteMessageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RouteMessageRequest.decode(message.value);
    },
    toProto(message) {
        return RouteMessageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest",
            value: RouteMessageRequest.encode(message).finish()
        };
    }
};
function createBaseRouteMessageResponse() {
    return {};
}
export const RouteMessageResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseRouteMessageResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRouteMessageResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RouteMessageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RouteMessageResponse.decode(message.value);
    },
    toProto(message) {
        return RouteMessageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse",
            value: RouteMessageResponse.encode(message).finish()
        };
    }
};
function createBaseCallContractRequest() {
    return {
        sender: new Uint8Array(),
        chain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        fee: undefined
    };
}
export const CallContractRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            chain: isSet(object.chain) ? String(object.chain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseCallContractRequest();
        message.sender = object.sender ?? new Uint8Array();
        message.chain = object.chain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCallContractRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = bytesFromBase64(object.payload);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Fee.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.chain = message.chain;
        obj.contract_address = message.contractAddress;
        obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
        obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CallContractRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CallContractRequest.decode(message.value);
    },
    toProto(message) {
        return CallContractRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest",
            value: CallContractRequest.encode(message).finish()
        };
    }
};
function createBaseCallContractResponse() {
    return {};
}
export const CallContractResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseCallContractResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseCallContractResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return CallContractResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CallContractResponse.decode(message.value);
    },
    toProto(message) {
        return CallContractResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse",
            value: CallContractResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map