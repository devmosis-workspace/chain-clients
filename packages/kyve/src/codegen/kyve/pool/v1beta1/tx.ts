import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: bigint;
  /** amount ... */
  amount: bigint;
}
export interface MsgFundPoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgFundPool";
  value: Uint8Array;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolAmino {
  /** creator ... */
  creator: string;
  /** id ... */
  id: string;
  /** amount ... */
  amount: string;
}
export interface MsgFundPoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgFundPool";
  value: MsgFundPoolAmino;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolSDKType {
  creator: string;
  id: bigint;
  amount: bigint;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {}
export interface MsgFundPoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgFundPoolResponse";
  value: Uint8Array;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseAmino {}
export interface MsgFundPoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgFundPoolResponse";
  value: MsgFundPoolResponseAmino;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseSDKType {}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: bigint;
  /** amount ... */
  amount: bigint;
}
export interface MsgDefundPoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgDefundPool";
  value: Uint8Array;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolAmino {
  /** creator ... */
  creator: string;
  /** id ... */
  id: string;
  /** amount ... */
  amount: string;
}
export interface MsgDefundPoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgDefundPool";
  value: MsgDefundPoolAmino;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolSDKType {
  creator: string;
  id: bigint;
  amount: bigint;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {}
export interface MsgDefundPoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgDefundPoolResponse";
  value: Uint8Array;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseAmino {}
export interface MsgDefundPoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgDefundPoolResponse";
  value: MsgDefundPoolResponseAmino;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseSDKType {}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** config ... */
  config: string;
  /** start_key ... */
  startKey: string;
  /** upload_interval ... */
  uploadInterval: bigint;
  /** operating_cost ... */
  operatingCost: bigint;
  /** min_delegation ... */
  minDelegation: bigint;
  /** max_bundle_size ... */
  maxBundleSize: bigint;
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** storage_provider_id ... */
  storageProviderId: number;
  /** compression_id ... */
  compressionId: number;
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgCreatePool";
  value: Uint8Array;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** config ... */
  config: string;
  /** start_key ... */
  start_key: string;
  /** upload_interval ... */
  upload_interval: string;
  /** operating_cost ... */
  operating_cost: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** storage_provider_id ... */
  storage_provider_id: number;
  /** compression_id ... */
  compression_id: number;
}
export interface MsgCreatePoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolSDKType {
  authority: string;
  name: string;
  runtime: string;
  logo: string;
  config: string;
  start_key: string;
  upload_interval: bigint;
  operating_cost: bigint;
  min_delegation: bigint;
  max_bundle_size: bigint;
  version: string;
  binaries: string;
  storage_provider_id: number;
  compression_id: number;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgCreatePoolResponse";
  value: Uint8Array;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: bigint;
  /** payload ... */
  payload: string;
}
export interface MsgUpdatePoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool";
  value: Uint8Array;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
  /** payload ... */
  payload: string;
}
export interface MsgUpdatePoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgUpdatePool";
  value: MsgUpdatePoolAmino;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolSDKType {
  authority: string;
  id: bigint;
  payload: string;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {}
export interface MsgUpdatePoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdatePoolResponse";
  value: Uint8Array;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseAmino {}
export interface MsgUpdatePoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgUpdatePoolResponse";
  value: MsgUpdatePoolResponseAmino;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseSDKType {}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: bigint;
}
export interface MsgDisablePoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgDisablePool";
  value: Uint8Array;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}
export interface MsgDisablePoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgDisablePool";
  value: MsgDisablePoolAmino;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolSDKType {
  authority: string;
  id: bigint;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {}
export interface MsgDisablePoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgDisablePoolResponse";
  value: Uint8Array;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseAmino {}
export interface MsgDisablePoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgDisablePoolResponse";
  value: MsgDisablePoolResponseAmino;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseSDKType {}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: bigint;
}
export interface MsgEnablePoolProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgEnablePool";
  value: Uint8Array;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}
export interface MsgEnablePoolAminoMsg {
  type: "/kyve.pool.v1beta1.MsgEnablePool";
  value: MsgEnablePoolAmino;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolSDKType {
  authority: string;
  id: bigint;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {}
export interface MsgEnablePoolResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgEnablePoolResponse";
  value: Uint8Array;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponseAmino {}
export interface MsgEnablePoolResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgEnablePoolResponse";
  value: MsgEnablePoolResponseAmino;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponseSDKType {}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
  /** version ... */
  version: string;
  /** scheduled_at ... */
  scheduledAt: bigint;
  /** duration ... */
  duration: bigint;
  /** binaries ... */
  binaries: string;
}
export interface MsgScheduleRuntimeUpgradeProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade";
  value: Uint8Array;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
  /** version ... */
  version: string;
  /** scheduled_at ... */
  scheduled_at: string;
  /** duration ... */
  duration: string;
  /** binaries ... */
  binaries: string;
}
export interface MsgScheduleRuntimeUpgradeAminoMsg {
  type: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade";
  value: MsgScheduleRuntimeUpgradeAmino;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeSDKType {
  authority: string;
  runtime: string;
  version: string;
  scheduled_at: bigint;
  duration: bigint;
  binaries: string;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {}
export interface MsgScheduleRuntimeUpgradeResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse";
  value: Uint8Array;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponseAmino {}
export interface MsgScheduleRuntimeUpgradeResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse";
  value: MsgScheduleRuntimeUpgradeResponseAmino;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponseSDKType {}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
}
export interface MsgCancelRuntimeUpgradeProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade";
  value: Uint8Array;
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
}
export interface MsgCancelRuntimeUpgradeAminoMsg {
  type: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade";
  value: MsgCancelRuntimeUpgradeAmino;
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeSDKType {
  authority: string;
  runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {}
export interface MsgCancelRuntimeUpgradeResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse";
  value: Uint8Array;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseAmino {}
export interface MsgCancelRuntimeUpgradeResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse";
  value: MsgCancelRuntimeUpgradeResponseAmino;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.pool.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.pool.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgFundPool(): MsgFundPool {
  return {
    creator: "",
    id: BigInt(0),
    amount: BigInt(0)
  };
}
export const MsgFundPool = {
  typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
  encode(message: MsgFundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgFundPool>): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgFundPoolAmino): MsgFundPool {
    return {
      creator: object.creator,
      id: BigInt(object.id),
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: MsgFundPool): MsgFundPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFundPoolAminoMsg): MsgFundPool {
    return MsgFundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundPoolProtoMsg): MsgFundPool {
    return MsgFundPool.decode(message.value);
  },
  toProto(message: MsgFundPool): Uint8Array {
    return MsgFundPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundPool): MsgFundPoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
      value: MsgFundPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}
export const MsgFundPoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgFundPoolResponse",
  encode(_: MsgFundPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundPoolResponse>): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundPoolResponseAmino): MsgFundPoolResponse {
    return {};
  },
  toAmino(_: MsgFundPoolResponse): MsgFundPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundPoolResponseAminoMsg): MsgFundPoolResponse {
    return MsgFundPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundPoolResponseProtoMsg): MsgFundPoolResponse {
    return MsgFundPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundPoolResponse): Uint8Array {
    return MsgFundPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundPoolResponse): MsgFundPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgFundPoolResponse",
      value: MsgFundPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDefundPool(): MsgDefundPool {
  return {
    creator: "",
    id: BigInt(0),
    amount: BigInt(0)
  };
}
export const MsgDefundPool = {
  typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
  encode(message: MsgDefundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDefundPool>): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDefundPoolAmino): MsgDefundPool {
    return {
      creator: object.creator,
      id: BigInt(object.id),
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: MsgDefundPool): MsgDefundPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDefundPoolAminoMsg): MsgDefundPool {
    return MsgDefundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefundPoolProtoMsg): MsgDefundPool {
    return MsgDefundPool.decode(message.value);
  },
  toProto(message: MsgDefundPool): Uint8Array {
    return MsgDefundPool.encode(message).finish();
  },
  toProtoMsg(message: MsgDefundPool): MsgDefundPoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
      value: MsgDefundPool.encode(message).finish()
    };
  }
};
function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}
export const MsgDefundPoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgDefundPoolResponse",
  encode(_: MsgDefundPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDefundPoolResponse>): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
  fromAmino(_: MsgDefundPoolResponseAmino): MsgDefundPoolResponse {
    return {};
  },
  toAmino(_: MsgDefundPoolResponse): MsgDefundPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDefundPoolResponseAminoMsg): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefundPoolResponseProtoMsg): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.decode(message.value);
  },
  toProto(message: MsgDefundPoolResponse): Uint8Array {
    return MsgDefundPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDefundPoolResponse): MsgDefundPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDefundPoolResponse",
      value: MsgDefundPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    uploadInterval: BigInt(0),
    operatingCost: BigInt(0),
    minDelegation: BigInt(0),
    maxBundleSize: BigInt(0),
    version: "",
    binaries: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const MsgCreatePool = {
  typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.config !== "") {
      writer.uint32(42).string(message.config);
    }
    if (message.startKey !== "") {
      writer.uint32(50).string(message.startKey);
    }
    if (message.uploadInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== BigInt(0)) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (message.minDelegation !== BigInt(0)) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (message.maxBundleSize !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxBundleSize);
    }
    if (message.version !== "") {
      writer.uint32(90).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(98).string(message.binaries);
    }
    if (message.storageProviderId !== 0) {
      writer.uint32(104).uint32(message.storageProviderId);
    }
    if (message.compressionId !== 0) {
      writer.uint32(112).uint32(message.compressionId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startKey: isSet(object.startKey) ? String(object.startKey) : "",
      uploadInterval: isSet(object.uploadInterval) ? BigInt(object.uploadInterval.toString()) : BigInt(0),
      operatingCost: isSet(object.operatingCost) ? BigInt(object.operatingCost.toString()) : BigInt(0),
      minDelegation: isSet(object.minDelegation) ? BigInt(object.minDelegation.toString()) : BigInt(0),
      maxBundleSize: isSet(object.maxBundleSize) ? BigInt(object.maxBundleSize.toString()) : BigInt(0),
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      storageProviderId: isSet(object.storageProviderId) ? Number(object.storageProviderId) : 0,
      compressionId: isSet(object.compressionId) ? Number(object.compressionId) : 0
    };
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.startKey = object.startKey ?? "";
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? BigInt(object.uploadInterval.toString()) : BigInt(0);
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? BigInt(object.operatingCost.toString()) : BigInt(0);
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? BigInt(object.minDelegation.toString()) : BigInt(0);
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? BigInt(object.maxBundleSize.toString()) : BigInt(0);
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    return {
      authority: object.authority,
      name: object.name,
      runtime: object.runtime,
      logo: object.logo,
      config: object.config,
      startKey: object.start_key,
      uploadInterval: BigInt(object.upload_interval),
      operatingCost: BigInt(object.operating_cost),
      minDelegation: BigInt(object.min_delegation),
      maxBundleSize: BigInt(object.max_bundle_size),
      version: object.version,
      binaries: object.binaries,
      storageProviderId: object.storage_provider_id,
      compressionId: object.compression_id
    };
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.name = message.name;
    obj.runtime = message.runtime;
    obj.logo = message.logo;
    obj.config = message.config;
    obj.start_key = message.startKey;
    obj.upload_interval = message.uploadInterval ? message.uploadInterval.toString() : undefined;
    obj.operating_cost = message.operatingCost ? message.operatingCost.toString() : undefined;
    obj.min_delegation = message.minDelegation ? message.minDelegation.toString() : undefined;
    obj.max_bundle_size = message.maxBundleSize ? message.maxBundleSize.toString() : undefined;
    obj.version = message.version;
    obj.binaries = message.binaries;
    obj.storage_provider_id = message.storageProviderId;
    obj.compression_id = message.compressionId;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgCreatePoolResponse",
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    return {};
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    authority: "",
    id: BigInt(0),
    payload: ""
  };
}
export const MsgUpdatePool = {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
  encode(message: MsgUpdatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      payload: object.payload
    };
  },
  toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool {
    return MsgUpdatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool {
    return MsgUpdatePool.decode(message.value);
  },
  toProto(message: MsgUpdatePool): Uint8Array {
    return MsgUpdatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
      value: MsgUpdatePool.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdatePoolResponse",
  encode(_: MsgUpdatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse {
    return {};
  },
  toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolResponse): Uint8Array {
    return MsgUpdatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgUpdatePoolResponse",
      value: MsgUpdatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisablePool(): MsgDisablePool {
  return {
    authority: "",
    id: BigInt(0)
  };
}
export const MsgDisablePool = {
  typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
  encode(message: MsgDisablePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDisablePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDisablePool>): MsgDisablePool {
    const message = createBaseMsgDisablePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDisablePoolAmino): MsgDisablePool {
    return {
      authority: object.authority,
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgDisablePool): MsgDisablePoolAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDisablePoolAminoMsg): MsgDisablePool {
    return MsgDisablePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisablePoolProtoMsg): MsgDisablePool {
    return MsgDisablePool.decode(message.value);
  },
  toProto(message: MsgDisablePool): Uint8Array {
    return MsgDisablePool.encode(message).finish();
  },
  toProtoMsg(message: MsgDisablePool): MsgDisablePoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
      value: MsgDisablePool.encode(message).finish()
    };
  }
};
function createBaseMsgDisablePoolResponse(): MsgDisablePoolResponse {
  return {};
}
export const MsgDisablePoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgDisablePoolResponse",
  encode(_: MsgDisablePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDisablePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDisablePoolResponse>): MsgDisablePoolResponse {
    const message = createBaseMsgDisablePoolResponse();
    return message;
  },
  fromAmino(_: MsgDisablePoolResponseAmino): MsgDisablePoolResponse {
    return {};
  },
  toAmino(_: MsgDisablePoolResponse): MsgDisablePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisablePoolResponseAminoMsg): MsgDisablePoolResponse {
    return MsgDisablePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisablePoolResponseProtoMsg): MsgDisablePoolResponse {
    return MsgDisablePoolResponse.decode(message.value);
  },
  toProto(message: MsgDisablePoolResponse): Uint8Array {
    return MsgDisablePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisablePoolResponse): MsgDisablePoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDisablePoolResponse",
      value: MsgDisablePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnablePool(): MsgEnablePool {
  return {
    authority: "",
    id: BigInt(0)
  };
}
export const MsgEnablePool = {
  typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
  encode(message: MsgEnablePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgEnablePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgEnablePool>): MsgEnablePool {
    const message = createBaseMsgEnablePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEnablePoolAmino): MsgEnablePool {
    return {
      authority: object.authority,
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgEnablePool): MsgEnablePoolAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEnablePoolAminoMsg): MsgEnablePool {
    return MsgEnablePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEnablePoolProtoMsg): MsgEnablePool {
    return MsgEnablePool.decode(message.value);
  },
  toProto(message: MsgEnablePool): Uint8Array {
    return MsgEnablePool.encode(message).finish();
  },
  toProtoMsg(message: MsgEnablePool): MsgEnablePoolProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
      value: MsgEnablePool.encode(message).finish()
    };
  }
};
function createBaseMsgEnablePoolResponse(): MsgEnablePoolResponse {
  return {};
}
export const MsgEnablePoolResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgEnablePoolResponse",
  encode(_: MsgEnablePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEnablePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEnablePoolResponse>): MsgEnablePoolResponse {
    const message = createBaseMsgEnablePoolResponse();
    return message;
  },
  fromAmino(_: MsgEnablePoolResponseAmino): MsgEnablePoolResponse {
    return {};
  },
  toAmino(_: MsgEnablePoolResponse): MsgEnablePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEnablePoolResponseAminoMsg): MsgEnablePoolResponse {
    return MsgEnablePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEnablePoolResponseProtoMsg): MsgEnablePoolResponse {
    return MsgEnablePoolResponse.decode(message.value);
  },
  toProto(message: MsgEnablePoolResponse): Uint8Array {
    return MsgEnablePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnablePoolResponse): MsgEnablePoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgEnablePoolResponse",
      value: MsgEnablePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleRuntimeUpgrade(): MsgScheduleRuntimeUpgrade {
  return {
    authority: "",
    runtime: "",
    version: "",
    scheduledAt: BigInt(0),
    duration: BigInt(0),
    binaries: ""
  };
}
export const MsgScheduleRuntimeUpgrade = {
  typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
  encode(message: MsgScheduleRuntimeUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.scheduledAt !== BigInt(0)) {
      writer.uint32(32).uint64(message.scheduledAt);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(50).string(message.binaries);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleRuntimeUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      version: isSet(object.version) ? String(object.version) : "",
      scheduledAt: isSet(object.scheduledAt) ? BigInt(object.scheduledAt.toString()) : BigInt(0),
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0),
      binaries: isSet(object.binaries) ? String(object.binaries) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleRuntimeUpgrade>): MsgScheduleRuntimeUpgrade {
    const message = createBaseMsgScheduleRuntimeUpgrade();
    message.authority = object.authority ?? "";
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? BigInt(object.scheduledAt.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.binaries = object.binaries ?? "";
    return message;
  },
  fromAmino(object: MsgScheduleRuntimeUpgradeAmino): MsgScheduleRuntimeUpgrade {
    return {
      authority: object.authority,
      runtime: object.runtime,
      version: object.version,
      scheduledAt: BigInt(object.scheduled_at),
      duration: BigInt(object.duration),
      binaries: object.binaries
    };
  },
  toAmino(message: MsgScheduleRuntimeUpgrade): MsgScheduleRuntimeUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.runtime = message.runtime;
    obj.version = message.version;
    obj.scheduled_at = message.scheduledAt ? message.scheduledAt.toString() : undefined;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    obj.binaries = message.binaries;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleRuntimeUpgradeAminoMsg): MsgScheduleRuntimeUpgrade {
    return MsgScheduleRuntimeUpgrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleRuntimeUpgradeProtoMsg): MsgScheduleRuntimeUpgrade {
    return MsgScheduleRuntimeUpgrade.decode(message.value);
  },
  toProto(message: MsgScheduleRuntimeUpgrade): Uint8Array {
    return MsgScheduleRuntimeUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleRuntimeUpgrade): MsgScheduleRuntimeUpgradeProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
      value: MsgScheduleRuntimeUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleRuntimeUpgradeResponse(): MsgScheduleRuntimeUpgradeResponse {
  return {};
}
export const MsgScheduleRuntimeUpgradeResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse",
  encode(_: MsgScheduleRuntimeUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleRuntimeUpgradeResponse>): MsgScheduleRuntimeUpgradeResponse {
    const message = createBaseMsgScheduleRuntimeUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgScheduleRuntimeUpgradeResponseAmino): MsgScheduleRuntimeUpgradeResponse {
    return {};
  },
  toAmino(_: MsgScheduleRuntimeUpgradeResponse): MsgScheduleRuntimeUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgScheduleRuntimeUpgradeResponseAminoMsg): MsgScheduleRuntimeUpgradeResponse {
    return MsgScheduleRuntimeUpgradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleRuntimeUpgradeResponseProtoMsg): MsgScheduleRuntimeUpgradeResponse {
    return MsgScheduleRuntimeUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgScheduleRuntimeUpgradeResponse): Uint8Array {
    return MsgScheduleRuntimeUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleRuntimeUpgradeResponse): MsgScheduleRuntimeUpgradeResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgradeResponse",
      value: MsgScheduleRuntimeUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRuntimeUpgrade(): MsgCancelRuntimeUpgrade {
  return {
    authority: "",
    runtime: ""
  };
}
export const MsgCancelRuntimeUpgrade = {
  typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
  encode(message: MsgCancelRuntimeUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelRuntimeUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelRuntimeUpgrade>): MsgCancelRuntimeUpgrade {
    const message = createBaseMsgCancelRuntimeUpgrade();
    message.authority = object.authority ?? "";
    message.runtime = object.runtime ?? "";
    return message;
  },
  fromAmino(object: MsgCancelRuntimeUpgradeAmino): MsgCancelRuntimeUpgrade {
    return {
      authority: object.authority,
      runtime: object.runtime
    };
  },
  toAmino(message: MsgCancelRuntimeUpgrade): MsgCancelRuntimeUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.runtime = message.runtime;
    return obj;
  },
  fromAminoMsg(object: MsgCancelRuntimeUpgradeAminoMsg): MsgCancelRuntimeUpgrade {
    return MsgCancelRuntimeUpgrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRuntimeUpgradeProtoMsg): MsgCancelRuntimeUpgrade {
    return MsgCancelRuntimeUpgrade.decode(message.value);
  },
  toProto(message: MsgCancelRuntimeUpgrade): Uint8Array {
    return MsgCancelRuntimeUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRuntimeUpgrade): MsgCancelRuntimeUpgradeProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
      value: MsgCancelRuntimeUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgCancelRuntimeUpgradeResponse(): MsgCancelRuntimeUpgradeResponse {
  return {};
}
export const MsgCancelRuntimeUpgradeResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse",
  encode(_: MsgCancelRuntimeUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelRuntimeUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelRuntimeUpgradeResponse>): MsgCancelRuntimeUpgradeResponse {
    const message = createBaseMsgCancelRuntimeUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgCancelRuntimeUpgradeResponseAmino): MsgCancelRuntimeUpgradeResponse {
    return {};
  },
  toAmino(_: MsgCancelRuntimeUpgradeResponse): MsgCancelRuntimeUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelRuntimeUpgradeResponseAminoMsg): MsgCancelRuntimeUpgradeResponse {
    return MsgCancelRuntimeUpgradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelRuntimeUpgradeResponseProtoMsg): MsgCancelRuntimeUpgradeResponse {
    return MsgCancelRuntimeUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgCancelRuntimeUpgradeResponse): Uint8Array {
    return MsgCancelRuntimeUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelRuntimeUpgradeResponse): MsgCancelRuntimeUpgradeResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgradeResponse",
      value: MsgCancelRuntimeUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      payload: object.payload
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.pool.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};