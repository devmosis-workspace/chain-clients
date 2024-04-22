import { Params } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, isObject } from "../../../helpers";
function createBasePendingIBCTransferCountRequest() {
    return {};
}
export const PendingIBCTransferCountRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBasePendingIBCTransferCountRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBasePendingIBCTransferCountRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return PendingIBCTransferCountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingIBCTransferCountRequest.decode(message.value);
    },
    toProto(message) {
        return PendingIBCTransferCountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest",
            value: PendingIBCTransferCountRequest.encode(message).finish()
        };
    }
};
function createBasePendingIBCTransferCountResponse_TransfersByChainEntry() {
    return {
        key: "",
        value: 0
    };
}
export const PendingIBCTransferCountResponse_TransfersByChainEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).uint32(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? Number(object.value) : 0
        };
    },
    fromPartial(object) {
        const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingIBCTransferCountResponse_TransfersByChainEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return PendingIBCTransferCountResponse_TransfersByChainEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingIBCTransferCountResponse_TransfersByChainEntry.decode(message.value);
    },
    toProto(message) {
        return PendingIBCTransferCountResponse_TransfersByChainEntry.encode(message).finish();
    }
};
function createBasePendingIBCTransferCountResponse() {
    return {
        transfersByChain: {}
    };
}
export const PendingIBCTransferCountResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse",
    encode(message, writer = BinaryWriter.create()) {
        Object.entries(message.transfersByChain).forEach(([key, value]) => {
            PendingIBCTransferCountResponse_TransfersByChainEntry.encode({
                key: key,
                value
            }, writer.uint32(8).fork()).ldelim();
        });
        return writer;
    },
    fromJSON(object) {
        return {
            transfersByChain: isObject(object.transfersByChain) ? Object.entries(object.transfersByChain).reduce((acc, [key, value]) => {
                acc[key] = Number(value);
                return acc;
            }, {}) : {}
        };
    },
    fromPartial(object) {
        const message = createBasePendingIBCTransferCountResponse();
        message.transfersByChain = Object.entries(object.transfersByChain ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingIBCTransferCountResponse();
        message.transfersByChain = Object.entries(object.transfers_by_chain ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transfers_by_chain = {};
        if (message.transfersByChain) {
            Object.entries(message.transfersByChain).forEach(([k, v]) => {
                obj.transfers_by_chain[k] = Math.round(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PendingIBCTransferCountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingIBCTransferCountResponse.decode(message.value);
    },
    toProto(message) {
        return PendingIBCTransferCountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse",
            value: PendingIBCTransferCountResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest",
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
            typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest",
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
    typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse",
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
            typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
function createBaseIBCPathRequest() {
    return {
        chain: ""
    };
}
export const IBCPathRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest",
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
        const message = createBaseIBCPathRequest();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCPathRequest();
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
        return IBCPathRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCPathRequest.decode(message.value);
    },
    toProto(message) {
        return IBCPathRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest",
            value: IBCPathRequest.encode(message).finish()
        };
    }
};
function createBaseIBCPathResponse() {
    return {
        ibcPath: ""
    };
}
export const IBCPathResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ibcPath !== "") {
            writer.uint32(10).string(message.ibcPath);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseIBCPathResponse();
        message.ibcPath = object.ibcPath ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCPathResponse();
        if (object.ibc_path !== undefined && object.ibc_path !== null) {
            message.ibcPath = object.ibc_path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ibc_path = message.ibcPath;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCPathResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCPathResponse.decode(message.value);
    },
    toProto(message) {
        return IBCPathResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse",
            value: IBCPathResponse.encode(message).finish()
        };
    }
};
function createBaseChainByIBCPathRequest() {
    return {
        ibcPath: ""
    };
}
export const ChainByIBCPathRequest = {
    typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ibcPath !== "") {
            writer.uint32(10).string(message.ibcPath);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainByIBCPathRequest();
        message.ibcPath = object.ibcPath ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainByIBCPathRequest();
        if (object.ibc_path !== undefined && object.ibc_path !== null) {
            message.ibcPath = object.ibc_path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ibc_path = message.ibcPath;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainByIBCPathRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainByIBCPathRequest.decode(message.value);
    },
    toProto(message) {
        return ChainByIBCPathRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest",
            value: ChainByIBCPathRequest.encode(message).finish()
        };
    }
};
function createBaseChainByIBCPathResponse() {
    return {
        chain: ""
    };
}
export const ChainByIBCPathResponse = {
    typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse",
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
        const message = createBaseChainByIBCPathResponse();
        message.chain = object.chain ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainByIBCPathResponse();
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
        return ChainByIBCPathResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainByIBCPathResponse.decode(message.value);
    },
    toProto(message) {
        return ChainByIBCPathResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse",
            value: ChainByIBCPathResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map