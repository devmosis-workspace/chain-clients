import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
export const GetValidatorSetByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetValidatorSetByHeightResponse() {
    return {
        blockHeight: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetValidatorSetByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined
    };
}
export const GetLatestValidatorSetRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestValidatorSetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestValidatorSetResponse() {
    return {
        blockHeight: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetLatestValidatorSetResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: "",
        pubKey: undefined,
        votingPower: BigInt(0),
        proposerPriority: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
            proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = Any.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.votingPower = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposerPriority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
        obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
        obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightRequest() {
    return {
        height: BigInt(0)
    };
}
export const GetBlockByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.encode(message).finish()
        };
    }
};
function createBaseGetBlockByHeightResponse() {
    return {
        blockId: undefined,
        block: undefined
    };
}
export const GetBlockByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromAmino(object.block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockRequest() {
    return {};
}
export const GetLatestBlockRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockRequest",
            value: GetLatestBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
            value: GetLatestBlockRequest.encode(message).finish()
        };
    }
};
function createBaseGetLatestBlockResponse() {
    return {
        blockId: undefined,
        block: undefined
    };
}
export const GetLatestBlockResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestBlockResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromAmino(object.block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockResponse",
            value: GetLatestBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
            value: GetLatestBlockResponse.encode(message).finish()
        };
    }
};
function createBaseGetSyncingRequest() {
    return {};
}
export const GetSyncingRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetSyncingRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetSyncingRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetSyncingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingRequest",
            value: GetSyncingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingRequest.decode(message.value);
    },
    toProto(message) {
        return GetSyncingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
            value: GetSyncingRequest.encode(message).finish()
        };
    }
};
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
export const GetSyncingResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
        };
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetSyncingResponse();
        if (object.syncing !== undefined && object.syncing !== null) {
            message.syncing = object.syncing;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAminoMsg(object) {
        return GetSyncingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingResponse",
            value: GetSyncingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingResponse.decode(message.value);
    },
    toProto(message) {
        return GetSyncingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
            value: GetSyncingResponse.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoRequest() {
    return {};
}
export const GetNodeInfoRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetNodeInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoRequest",
            value: GetNodeInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
            value: GetNodeInfoRequest.encode(message).finish()
        };
    }
};
function createBaseGetNodeInfoResponse() {
    return {
        defaultNodeInfo: undefined,
        applicationVersion: undefined
    };
}
export const GetNodeInfoResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.defaultNodeInfo !== undefined) {
            DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            defaultNodeInfo: isSet(object.defaultNodeInfo) ? DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
            applicationVersion: isSet(object.applicationVersion) ? VersionInfo.fromJSON(object.applicationVersion) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.defaultNodeInfo = object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : undefined;
        message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetNodeInfoResponse();
        if (object.default_node_info !== undefined && object.default_node_info !== null) {
            message.defaultNodeInfo = DefaultNodeInfo.fromAmino(object.default_node_info);
        }
        if (object.application_version !== undefined && object.application_version !== null) {
            message.applicationVersion = VersionInfo.fromAmino(object.application_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.default_node_info = message.defaultNodeInfo ? DefaultNodeInfo.toAmino(message.defaultNodeInfo) : undefined;
        obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetNodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoResponse",
            value: GetNodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
            value: GetNodeInfoResponse.encode(message).finish()
        };
    }
};
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: ""
    };
}
export const VersionInfo = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== "") {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== "") {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== "") {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== "") {
            writer.uint32(50).string(message.goVersion);
        }
        for (const v of message.buildDeps) {
            Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            appName: isSet(object.appName) ? String(object.appName) : "",
            version: isSet(object.version) ? String(object.version) : "",
            gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
            buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
            goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
            buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e) => Module.fromJSON(e)) : [],
            cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.appName = object.appName ?? "";
        message.version = object.version ?? "";
        message.gitCommit = object.gitCommit ?? "";
        message.buildTags = object.buildTags ?? "";
        message.goVersion = object.goVersion ?? "";
        message.buildDeps = object.buildDeps?.map(e => Module.fromPartial(e)) || [];
        message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersionInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.app_name !== undefined && object.app_name !== null) {
            message.appName = object.app_name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.git_commit !== undefined && object.git_commit !== null) {
            message.gitCommit = object.git_commit;
        }
        if (object.build_tags !== undefined && object.build_tags !== null) {
            message.buildTags = object.build_tags;
        }
        if (object.go_version !== undefined && object.go_version !== null) {
            message.goVersion = object.go_version;
        }
        message.buildDeps = object.build_deps?.map(e => Module.fromAmino(e)) || [];
        if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
            message.cosmosSdkVersion = object.cosmos_sdk_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.appName;
        obj.version = message.version;
        obj.git_commit = message.gitCommit;
        obj.build_tags = message.buildTags;
        obj.go_version = message.goVersion;
        if (message.buildDeps) {
            obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmosSdkVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return VersionInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VersionInfo",
            value: VersionInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return VersionInfo.decode(message.value);
    },
    toProto(message) {
        return VersionInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
            value: VersionInfo.encode(message).finish()
        };
    }
};
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
export const Module = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = object.sum;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Module.decode(message.value);
    },
    toProto(message) {
        return Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
            value: Module.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map