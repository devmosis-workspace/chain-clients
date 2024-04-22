import { Bitmap } from "../../utils/v1beta1/bitmap";
import { Chain, Asset, CrossChainAddress, transferDirectionFromJSON } from "../exported/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMaintainerState() {
    return {
        address: new Uint8Array(),
        missingVotes: Bitmap.fromPartial({}),
        incorrectVotes: Bitmap.fromPartial({}),
        chain: ""
    };
}
export const MaintainerState = {
    typeUrl: "/axelar.nexus.v1beta1.MaintainerState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.missingVotes !== undefined) {
            Bitmap.encode(message.missingVotes, writer.uint32(18).fork()).ldelim();
        }
        if (message.incorrectVotes !== undefined) {
            Bitmap.encode(message.incorrectVotes, writer.uint32(26).fork()).ldelim();
        }
        if (message.chain !== "") {
            writer.uint32(34).string(message.chain);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            missingVotes: isSet(object.missingVotes) ? Bitmap.fromJSON(object.missingVotes) : undefined,
            incorrectVotes: isSet(object.incorrectVotes) ? Bitmap.fromJSON(object.incorrectVotes) : undefined,
            chain: isSet(object.chain) ? String(object.chain) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMaintainerState();
        message.address = object.address ?? new Uint8Array();
        message.missingVotes = object.missingVotes !== undefined && object.missingVotes !== null ? Bitmap.fromPartial(object.missingVotes) : undefined;
        message.incorrectVotes = object.incorrectVotes !== undefined && object.incorrectVotes !== null ? Bitmap.fromPartial(object.incorrectVotes) : undefined;
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMaintainerState();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.missing_votes !== undefined && object.missing_votes !== null) {
            message.missingVotes = Bitmap.fromAmino(object.missing_votes);
        }
        if (object.incorrect_votes !== undefined && object.incorrect_votes !== null) {
            message.incorrectVotes = Bitmap.fromAmino(object.incorrect_votes);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.missing_votes = message.missingVotes ? Bitmap.toAmino(message.missingVotes) : undefined;
        obj.incorrect_votes = message.incorrectVotes ? Bitmap.toAmino(message.incorrectVotes) : undefined;
        obj.chain = message.chain;
        return obj;
    },
    fromAminoMsg(object) {
        return MaintainerState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MaintainerState.decode(message.value);
    },
    toProto(message) {
        return MaintainerState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.MaintainerState",
            value: MaintainerState.encode(message).finish()
        };
    }
};
function createBaseChainState() {
    return {
        chain: Chain.fromPartial({}),
        activated: false,
        assets: [],
        maintainerStates: []
    };
}
export const ChainState = {
    typeUrl: "/axelar.nexus.v1beta1.ChainState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== undefined) {
            Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        if (message.activated === true) {
            writer.uint32(24).bool(message.activated);
        }
        for (const v of message.assets) {
            Asset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.maintainerStates) {
            MaintainerState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
            activated: isSet(object.activated) ? Boolean(object.activated) : false,
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => Asset.fromJSON(e)) : [],
            maintainerStates: Array.isArray(object?.maintainerStates) ? object.maintainerStates.map((e) => MaintainerState.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseChainState();
        message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
        message.activated = object.activated ?? false;
        message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
        message.maintainerStates = object.maintainerStates?.map(e => MaintainerState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainState();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromAmino(object.chain);
        }
        if (object.activated !== undefined && object.activated !== null) {
            message.activated = object.activated;
        }
        message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
        message.maintainerStates = object.maintainer_states?.map(e => MaintainerState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
        obj.activated = message.activated;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        if (message.maintainerStates) {
            obj.maintainer_states = message.maintainerStates.map(e => e ? MaintainerState.toAmino(e) : undefined);
        }
        else {
            obj.maintainer_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ChainState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainState.decode(message.value);
    },
    toProto(message) {
        return ChainState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.ChainState",
            value: ChainState.encode(message).finish()
        };
    }
};
function createBaseLinkedAddresses() {
    return {
        depositAddress: CrossChainAddress.fromPartial({}),
        recipientAddress: CrossChainAddress.fromPartial({})
    };
}
export const LinkedAddresses = {
    typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses",
    encode(message, writer = BinaryWriter.create()) {
        if (message.depositAddress !== undefined) {
            CrossChainAddress.encode(message.depositAddress, writer.uint32(10).fork()).ldelim();
        }
        if (message.recipientAddress !== undefined) {
            CrossChainAddress.encode(message.recipientAddress, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            depositAddress: isSet(object.depositAddress) ? CrossChainAddress.fromJSON(object.depositAddress) : undefined,
            recipientAddress: isSet(object.recipientAddress) ? CrossChainAddress.fromJSON(object.recipientAddress) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseLinkedAddresses();
        message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? CrossChainAddress.fromPartial(object.depositAddress) : undefined;
        message.recipientAddress = object.recipientAddress !== undefined && object.recipientAddress !== null ? CrossChainAddress.fromPartial(object.recipientAddress) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLinkedAddresses();
        if (object.deposit_address !== undefined && object.deposit_address !== null) {
            message.depositAddress = CrossChainAddress.fromAmino(object.deposit_address);
        }
        if (object.recipient_address !== undefined && object.recipient_address !== null) {
            message.recipientAddress = CrossChainAddress.fromAmino(object.recipient_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_address = message.depositAddress ? CrossChainAddress.toAmino(message.depositAddress) : undefined;
        obj.recipient_address = message.recipientAddress ? CrossChainAddress.toAmino(message.recipientAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LinkedAddresses.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LinkedAddresses.decode(message.value);
    },
    toProto(message) {
        return LinkedAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses",
            value: LinkedAddresses.encode(message).finish()
        };
    }
};
function createBaseRateLimit() {
    return {
        chain: "",
        limit: Coin.fromPartial({}),
        window: Duration.fromPartial({})
    };
}
export const RateLimit = {
    typeUrl: "/axelar.nexus.v1beta1.RateLimit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.limit !== undefined) {
            Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.window !== undefined) {
            Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
            window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseRateLimit();
        message.chain = object.chain ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
        message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRateLimit();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Coin.fromAmino(object.limit);
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = Duration.fromAmino(object.window);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
        obj.window = message.window ? Duration.toAmino(message.window) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RateLimit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RateLimit.decode(message.value);
    },
    toProto(message) {
        return RateLimit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.RateLimit",
            value: RateLimit.encode(message).finish()
        };
    }
};
function createBaseTransferEpoch() {
    return {
        chain: "",
        amount: Coin.fromPartial({}),
        epoch: BigInt(0),
        direction: 0
    };
}
export const TransferEpoch = {
    typeUrl: "/axelar.nexus.v1beta1.TransferEpoch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.epoch !== BigInt(0)) {
            writer.uint32(24).uint64(message.epoch);
        }
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
            direction: isSet(object.direction) ? transferDirectionFromJSON(object.direction) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseTransferEpoch();
        message.chain = object.chain ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
        message.direction = object.direction ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferEpoch();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.epoch !== undefined && object.epoch !== null) {
            message.epoch = BigInt(object.epoch);
        }
        if (object.direction !== undefined && object.direction !== null) {
            message.direction = transferDirectionFromJSON(object.direction);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.epoch = message.epoch ? message.epoch.toString() : undefined;
        obj.direction = message.direction;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferEpoch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferEpoch.decode(message.value);
    },
    toProto(message) {
        return TransferEpoch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.TransferEpoch",
            value: TransferEpoch.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map