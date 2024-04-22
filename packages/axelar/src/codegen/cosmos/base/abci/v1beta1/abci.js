import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseTxResponse() {
    return {
        height: BigInt(0),
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        rawLog: "",
        logs: [],
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        tx: undefined,
        timestamp: "",
        events: []
    };
}
export const TxResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== "") {
            writer.uint32(50).string(message.rawLog);
        }
        for (const v of message.logs) {
            ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? String(object.data) : "",
            rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => ABCIMessageLog.fromJSON(e)) : [],
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0),
            gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0),
            tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseTxResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.txhash = object.txhash ?? "";
        message.codespace = object.codespace ?? "";
        message.code = object.code ?? 0;
        message.data = object.data ?? "";
        message.rawLog = object.rawLog ?? "";
        message.logs = object.logs?.map(e => ABCIMessageLog.fromPartial(e)) || [];
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
        message.timestamp = object.timestamp ?? "";
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.rawLog = object.raw_log;
        }
        message.logs = object.logs?.map(e => ABCIMessageLog.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Any.fromAmino(object.tx);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.txhash = message.txhash;
        obj.codespace = message.codespace;
        obj.code = message.code;
        obj.data = message.data;
        obj.raw_log = message.rawLog;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? ABCIMessageLog.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.info = message.info;
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        obj.tx = message.tx ? Any.toAmino(message.tx) : undefined;
        obj.timestamp = message.timestamp;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxResponse",
            value: TxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxResponse.decode(message.value);
    },
    toProto(message) {
        return TxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
            value: TxResponse.encode(message).finish()
        };
    }
};
function createBaseABCIMessageLog() {
    return {
        msgIndex: 0,
        log: "",
        events: []
    };
}
export const ABCIMessageLog = {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => StringEvent.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseABCIMessageLog();
        message.msgIndex = object.msgIndex ?? 0;
        message.log = object.log ?? "";
        message.events = object.events?.map(e => StringEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseABCIMessageLog();
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = object.msg_index;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => StringEvent.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_index = message.msgIndex;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? StringEvent.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ABCIMessageLog.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIMessageLog",
            value: ABCIMessageLog.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ABCIMessageLog.decode(message.value);
    },
    toProto(message) {
        return ABCIMessageLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
            value: ABCIMessageLog.encode(message).finish()
        };
    }
};
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
export const StringEvent = {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => Attribute.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseStringEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStringEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return StringEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StringEvent",
            value: StringEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StringEvent.decode(message.value);
    },
    toProto(message) {
        return StringEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
            value: StringEvent.encode(message).finish()
        };
    }
};
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
export const Attribute = {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttribute();
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
        return Attribute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Attribute",
            value: Attribute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Attribute.decode(message.value);
    },
    toProto(message) {
        return Attribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
            value: Attribute.encode(message).finish()
        };
    }
};
function createBaseGasInfo() {
    return {
        gasWanted: BigInt(0),
        gasUsed: BigInt(0)
    };
}
export const GasInfo = {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt(0),
            gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGasInfo();
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_wanted = message.gasWanted ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GasInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GasInfo",
            value: GasInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GasInfo.decode(message.value);
    },
    toProto(message) {
        return GasInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
            value: GasInfo.encode(message).finish()
        };
    }
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: []
    };
}
export const Result = {
    typeUrl: "/cosmos.base.abci.v1beta1.Result",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResult();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Result.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Result",
            value: Result.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Result.decode(message.value);
    },
    toProto(message) {
        return Result.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Result",
            value: Result.encode(message).finish()
        };
    }
};
function createBaseSimulationResponse() {
    return {
        gasInfo: GasInfo.fromPartial({}),
        result: undefined
    };
}
export const SimulationResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimulationResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gasInfo = GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
        obj.result = message.result ? Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulationResponse",
            value: SimulationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulationResponse.decode(message.value);
    },
    toProto(message) {
        return SimulationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
            value: SimulationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgData() {
    return {
        msgType: "",
        data: new Uint8Array()
    };
}
export const MsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msgType !== "") {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msgType: isSet(object.msgType) ? String(object.msgType) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseMsgData();
        message.msgType = object.msgType ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgData();
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msgType = object.msg_type;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type = message.msgType;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgData",
            value: MsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgData.decode(message.value);
    },
    toProto(message) {
        return MsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
            value: MsgData.encode(message).finish()
        };
    }
};
function createBaseTxMsgData() {
    return {
        data: []
    };
}
export const TxMsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => MsgData.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => MsgData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => MsgData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? MsgData.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxMsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxMsgData",
            value: TxMsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxMsgData.decode(message.value);
    },
    toProto(message) {
        return TxMsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
            value: TxMsgData.encode(message).finish()
        };
    }
};
function createBaseSearchTxsResult() {
    return {
        totalCount: BigInt(0),
        count: BigInt(0),
        pageNumber: BigInt(0),
        pageTotal: BigInt(0),
        limit: BigInt(0),
        txs: []
    };
}
export const SearchTxsResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.pageNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (message.pageTotal !== BigInt(0)) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            totalCount: isSet(object.totalCount) ? BigInt(object.totalCount.toString()) : BigInt(0),
            count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0),
            pageNumber: isSet(object.pageNumber) ? BigInt(object.pageNumber.toString()) : BigInt(0),
            pageTotal: isSet(object.pageTotal) ? BigInt(object.pageTotal.toString()) : BigInt(0),
            limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => TxResponse.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseSearchTxsResult();
        message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.pageNumber = object.pageNumber !== undefined && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
        message.pageTotal = object.pageTotal !== undefined && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => TxResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSearchTxsResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.totalCount = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.pageNumber = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.pageTotal = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.txs = object.txs?.map(e => TxResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
        obj.count = message.count ? message.count.toString() : undefined;
        obj.page_number = message.pageNumber ? message.pageNumber.toString() : undefined;
        obj.page_total = message.pageTotal ? message.pageTotal.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SearchTxsResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SearchTxsResult",
            value: SearchTxsResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SearchTxsResult.decode(message.value);
    },
    toProto(message) {
        return SearchTxsResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
            value: SearchTxsResult.encode(message).finish()
        };
    }
};
//# sourceMappingURL=abci.js.map