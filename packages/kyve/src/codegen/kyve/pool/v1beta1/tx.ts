import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  /** inflation_share_weight ... */
  inflationShareWeight: bigint;
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
  authority?: string;
  /** name ... */
  name?: string;
  /** runtime ... */
  runtime?: string;
  /** logo ... */
  logo?: string;
  /** config ... */
  config?: string;
  /** start_key ... */
  start_key?: string;
  /** upload_interval ... */
  upload_interval?: string;
  /** inflation_share_weight ... */
  inflation_share_weight?: string;
  /** min_delegation ... */
  min_delegation?: string;
  /** max_bundle_size ... */
  max_bundle_size?: string;
  /** version ... */
  version?: string;
  /** binaries ... */
  binaries?: string;
  /** storage_provider_id ... */
  storage_provider_id?: number;
  /** compression_id ... */
  compression_id?: number;
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
  inflation_share_weight: bigint;
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
  authority?: string;
  /** id ... */
  id?: string;
  /** payload ... */
  payload?: string;
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
  authority?: string;
  /** id ... */
  id?: string;
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
  authority?: string;
  /** id ... */
  id?: string;
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
  authority?: string;
  /** runtime ... */
  runtime?: string;
  /** version ... */
  version?: string;
  /** scheduled_at ... */
  scheduled_at?: string;
  /** duration ... */
  duration?: string;
  /** binaries ... */
  binaries?: string;
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
  authority?: string;
  /** runtime ... */
  runtime?: string;
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
  authority?: string;
  /** payload defines the x/stakers parameters to update. */
  payload?: string;
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
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    startKey: "",
    uploadInterval: BigInt(0),
    inflationShareWeight: BigInt(0),
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
    if (message.inflationShareWeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.inflationShareWeight);
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
      inflationShareWeight: isSet(object.inflationShareWeight) ? BigInt(object.inflationShareWeight.toString()) : BigInt(0),
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
    message.inflationShareWeight = object.inflationShareWeight !== undefined && object.inflationShareWeight !== null ? BigInt(object.inflationShareWeight.toString()) : BigInt(0);
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? BigInt(object.minDelegation.toString()) : BigInt(0);
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? BigInt(object.maxBundleSize.toString()) : BigInt(0);
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.runtime !== undefined && object.runtime !== null) {
      message.runtime = object.runtime;
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = object.logo;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = object.config;
    }
    if (object.start_key !== undefined && object.start_key !== null) {
      message.startKey = object.start_key;
    }
    if (object.upload_interval !== undefined && object.upload_interval !== null) {
      message.uploadInterval = BigInt(object.upload_interval);
    }
    if (object.inflation_share_weight !== undefined && object.inflation_share_weight !== null) {
      message.inflationShareWeight = BigInt(object.inflation_share_weight);
    }
    if (object.min_delegation !== undefined && object.min_delegation !== null) {
      message.minDelegation = BigInt(object.min_delegation);
    }
    if (object.max_bundle_size !== undefined && object.max_bundle_size !== null) {
      message.maxBundleSize = BigInt(object.max_bundle_size);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.binaries !== undefined && object.binaries !== null) {
      message.binaries = object.binaries;
    }
    if (object.storage_provider_id !== undefined && object.storage_provider_id !== null) {
      message.storageProviderId = object.storage_provider_id;
    }
    if (object.compression_id !== undefined && object.compression_id !== null) {
      message.compressionId = object.compression_id;
    }
    return message;
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
    obj.inflation_share_weight = message.inflationShareWeight ? message.inflationShareWeight.toString() : undefined;
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
    const message = createBaseMsgCreatePoolResponse();
    return message;
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
    const message = createBaseMsgUpdatePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
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
    const message = createBaseMsgUpdatePoolResponse();
    return message;
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
    const message = createBaseMsgDisablePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
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
    const message = createBaseMsgDisablePoolResponse();
    return message;
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
    const message = createBaseMsgEnablePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
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
    const message = createBaseMsgEnablePoolResponse();
    return message;
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
    const message = createBaseMsgScheduleRuntimeUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.runtime !== undefined && object.runtime !== null) {
      message.runtime = object.runtime;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.scheduled_at !== undefined && object.scheduled_at !== null) {
      message.scheduledAt = BigInt(object.scheduled_at);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.binaries !== undefined && object.binaries !== null) {
      message.binaries = object.binaries;
    }
    return message;
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
    const message = createBaseMsgScheduleRuntimeUpgradeResponse();
    return message;
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
    const message = createBaseMsgCancelRuntimeUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.runtime !== undefined && object.runtime !== null) {
      message.runtime = object.runtime;
    }
    return message;
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
    const message = createBaseMsgCancelRuntimeUpgradeResponse();
    return message;
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
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
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