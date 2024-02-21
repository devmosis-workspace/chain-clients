import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContract {
  adminAddress: string;
  transferChannelId: string;
}
export interface MsgInstantiateOracleContractProtoMsg {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract";
  value: Uint8Array;
}
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContractAmino {
  admin_address?: string;
  transfer_channel_id?: string;
}
export interface MsgInstantiateOracleContractAminoMsg {
  type: "/stride.icaoracle.MsgInstantiateOracleContract";
  value: MsgInstantiateOracleContractAmino;
}
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContractSDKType {
  admin_address: string;
  transfer_channel_id: string;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetric {
  /** ExecuteContractPostMetric is the contract-specific metric update message */
  postMetric?: MsgPostMetric;
}
export interface MsgExecuteContractPostMetricProtoMsg {
  typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric";
  value: Uint8Array;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetricAmino {
  /** ExecuteContractPostMetric is the contract-specific metric update message */
  post_metric?: MsgPostMetricAmino;
}
export interface MsgExecuteContractPostMetricAminoMsg {
  type: "/stride.icaoracle.MsgExecuteContractPostMetric";
  value: MsgExecuteContractPostMetricAmino;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetricSDKType {
  post_metric?: MsgPostMetricSDKType;
}
/** Body of PostMetric contract message */
export interface MsgPostMetric {
  key: string;
  value: string;
  metricType: string;
  updateTime: bigint;
  blockHeight: bigint;
  attributes: string;
}
export interface MsgPostMetricProtoMsg {
  typeUrl: "/stride.icaoracle.MsgPostMetric";
  value: Uint8Array;
}
/** Body of PostMetric contract message */
export interface MsgPostMetricAmino {
  key?: string;
  value?: string;
  metric_type?: string;
  update_time?: string;
  block_height?: string;
  attributes?: string;
}
export interface MsgPostMetricAminoMsg {
  type: "/stride.icaoracle.MsgPostMetric";
  value: MsgPostMetricAmino;
}
/** Body of PostMetric contract message */
export interface MsgPostMetricSDKType {
  key: string;
  value: string;
  metric_type: string;
  update_time: bigint;
  block_height: bigint;
  attributes: string;
}
function createBaseMsgInstantiateOracleContract(): MsgInstantiateOracleContract {
  return {
    adminAddress: "",
    transferChannelId: ""
  };
}
export const MsgInstantiateOracleContract = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract",
  encode(message: MsgInstantiateOracleContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.adminAddress !== "") {
      writer.uint32(10).string(message.adminAddress);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(18).string(message.transferChannelId);
    }
    return writer;
  },
  fromJSON(object: any): MsgInstantiateOracleContract {
    return {
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },
  fromPartial(object: Partial<MsgInstantiateOracleContract>): MsgInstantiateOracleContract {
    const message = createBaseMsgInstantiateOracleContract();
    message.adminAddress = object.adminAddress ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  },
  fromAmino(object: MsgInstantiateOracleContractAmino): MsgInstantiateOracleContract {
    const message = createBaseMsgInstantiateOracleContract();
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    if (object.transfer_channel_id !== undefined && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    return message;
  },
  toAmino(message: MsgInstantiateOracleContract): MsgInstantiateOracleContractAmino {
    const obj: any = {};
    obj.admin_address = message.adminAddress;
    obj.transfer_channel_id = message.transferChannelId;
    return obj;
  },
  fromAminoMsg(object: MsgInstantiateOracleContractAminoMsg): MsgInstantiateOracleContract {
    return MsgInstantiateOracleContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantiateOracleContractProtoMsg): MsgInstantiateOracleContract {
    return MsgInstantiateOracleContract.decode(message.value);
  },
  toProto(message: MsgInstantiateOracleContract): Uint8Array {
    return MsgInstantiateOracleContract.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantiateOracleContract): MsgInstantiateOracleContractProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract",
      value: MsgInstantiateOracleContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractPostMetric(): MsgExecuteContractPostMetric {
  return {
    postMetric: undefined
  };
}
export const MsgExecuteContractPostMetric = {
  typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric",
  encode(message: MsgExecuteContractPostMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postMetric !== undefined) {
      MsgPostMetric.encode(message.postMetric, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContractPostMetric {
    return {
      postMetric: isSet(object.postMetric) ? MsgPostMetric.fromJSON(object.postMetric) : undefined
    };
  },
  fromPartial(object: Partial<MsgExecuteContractPostMetric>): MsgExecuteContractPostMetric {
    const message = createBaseMsgExecuteContractPostMetric();
    message.postMetric = object.postMetric !== undefined && object.postMetric !== null ? MsgPostMetric.fromPartial(object.postMetric) : undefined;
    return message;
  },
  fromAmino(object: MsgExecuteContractPostMetricAmino): MsgExecuteContractPostMetric {
    const message = createBaseMsgExecuteContractPostMetric();
    if (object.post_metric !== undefined && object.post_metric !== null) {
      message.postMetric = MsgPostMetric.fromAmino(object.post_metric);
    }
    return message;
  },
  toAmino(message: MsgExecuteContractPostMetric): MsgExecuteContractPostMetricAmino {
    const obj: any = {};
    obj.post_metric = message.postMetric ? MsgPostMetric.toAmino(message.postMetric) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractPostMetricAminoMsg): MsgExecuteContractPostMetric {
    return MsgExecuteContractPostMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractPostMetricProtoMsg): MsgExecuteContractPostMetric {
    return MsgExecuteContractPostMetric.decode(message.value);
  },
  toProto(message: MsgExecuteContractPostMetric): Uint8Array {
    return MsgExecuteContractPostMetric.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractPostMetric): MsgExecuteContractPostMetricProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric",
      value: MsgExecuteContractPostMetric.encode(message).finish()
    };
  }
};
function createBaseMsgPostMetric(): MsgPostMetric {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: BigInt(0),
    blockHeight: BigInt(0),
    attributes: ""
  };
}
export const MsgPostMetric = {
  typeUrl: "/stride.icaoracle.MsgPostMetric",
  encode(message: MsgPostMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.metricType !== "") {
      writer.uint32(26).string(message.metricType);
    }
    if (message.updateTime !== BigInt(0)) {
      writer.uint32(32).int64(message.updateTime);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.attributes !== "") {
      writer.uint32(50).string(message.attributes);
    }
    return writer;
  },
  fromJSON(object: any): MsgPostMetric {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      metricType: isSet(object.metricType) ? String(object.metricType) : "",
      updateTime: isSet(object.updateTime) ? BigInt(object.updateTime.toString()) : BigInt(0),
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      attributes: isSet(object.attributes) ? String(object.attributes) : ""
    };
  },
  fromPartial(object: Partial<MsgPostMetric>): MsgPostMetric {
    const message = createBaseMsgPostMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? BigInt(object.updateTime.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.attributes = object.attributes ?? "";
    return message;
  },
  fromAmino(object: MsgPostMetricAmino): MsgPostMetric {
    const message = createBaseMsgPostMetric();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.metric_type !== undefined && object.metric_type !== null) {
      message.metricType = object.metric_type;
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = BigInt(object.update_time);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = object.attributes;
    }
    return message;
  },
  toAmino(message: MsgPostMetric): MsgPostMetricAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    obj.metric_type = message.metricType;
    obj.update_time = message.updateTime ? message.updateTime.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.attributes = message.attributes;
    return obj;
  },
  fromAminoMsg(object: MsgPostMetricAminoMsg): MsgPostMetric {
    return MsgPostMetric.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPostMetricProtoMsg): MsgPostMetric {
    return MsgPostMetric.decode(message.value);
  },
  toProto(message: MsgPostMetric): Uint8Array {
    return MsgPostMetric.encode(message).finish();
  },
  toProtoMsg(message: MsgPostMetric): MsgPostMetricProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.MsgPostMetric",
      value: MsgPostMetric.encode(message).finish()
    };
  }
};