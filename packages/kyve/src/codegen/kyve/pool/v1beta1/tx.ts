import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: Long;
  /** amount ... */
  amount: Long;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolSDKType {
  creator: string;
  id: Long;
  amount: Long;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseSDKType {}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: Long;
  /** amount ... */
  amount: Long;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolSDKType {
  creator: string;
  id: Long;
  amount: Long;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {}
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
  uploadInterval: Long;
  /** operating_cost ... */
  operatingCost: Long;
  /** min_delegation ... */
  minDelegation: Long;
  /** max_bundle_size ... */
  maxBundleSize: Long;
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** storage_provider_id ... */
  storageProviderId: number;
  /** compression_id ... */
  compressionId: number;
}
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePoolSDKType {
  authority: string;
  name: string;
  runtime: string;
  logo: string;
  config: string;
  start_key: string;
  upload_interval: Long;
  operating_cost: Long;
  min_delegation: Long;
  max_bundle_size: Long;
  version: string;
  binaries: string;
  storage_provider_id: number;
  compression_id: number;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: Long;
  /** payload ... */
  payload: string;
}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePoolSDKType {
  authority: string;
  id: Long;
  payload: string;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponseSDKType {}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: Long;
}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePoolSDKType {
  authority: string;
  id: Long;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponseSDKType {}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: Long;
}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePoolSDKType {
  authority: string;
  id: Long;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {}
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
  scheduledAt: Long;
  /** duration ... */
  duration: Long;
  /** binaries ... */
  binaries: string;
}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgradeSDKType {
  authority: string;
  runtime: string;
  version: string;
  scheduled_at: Long;
  duration: Long;
  binaries: string;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponseSDKType {}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgradeSDKType {
  authority: string;
  runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponseSDKType {}
function createBaseMsgFundPool(): MsgFundPool {
  return {
    creator: "",
    id: Long.UZERO,
    amount: Long.UZERO
  };
}
export const MsgFundPool = {
  encode(message: MsgFundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgFundPool>): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}
export const MsgFundPoolResponse = {
  encode(_: MsgFundPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundPoolResponse>): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  }
};
function createBaseMsgDefundPool(): MsgDefundPool {
  return {
    creator: "",
    id: Long.UZERO,
    amount: Long.UZERO
  };
}
export const MsgDefundPool = {
  encode(message: MsgDefundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgDefundPool>): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}
export const MsgDefundPoolResponse = {
  encode(_: MsgDefundPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDefundPoolResponse>): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
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
    uploadInterval: Long.UZERO,
    operatingCost: Long.UZERO,
    minDelegation: Long.UZERO,
    maxBundleSize: Long.UZERO,
    version: "",
    binaries: "",
    storageProviderId: 0,
    compressionId: 0
  };
}
export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.uploadInterval.isZero()) {
      writer.uint32(56).uint64(message.uploadInterval);
    }
    if (!message.operatingCost.isZero()) {
      writer.uint32(64).uint64(message.operatingCost);
    }
    if (!message.minDelegation.isZero()) {
      writer.uint32(72).uint64(message.minDelegation);
    }
    if (!message.maxBundleSize.isZero()) {
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
      uploadInterval: isSet(object.uploadInterval) ? Long.fromValue(object.uploadInterval) : Long.UZERO,
      operatingCost: isSet(object.operatingCost) ? Long.fromValue(object.operatingCost) : Long.UZERO,
      minDelegation: isSet(object.minDelegation) ? Long.fromValue(object.minDelegation) : Long.UZERO,
      maxBundleSize: isSet(object.maxBundleSize) ? Long.fromValue(object.maxBundleSize) : Long.UZERO,
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
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? Long.fromValue(object.uploadInterval) : Long.UZERO;
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? Long.fromValue(object.operatingCost) : Long.UZERO;
    message.minDelegation = object.minDelegation !== undefined && object.minDelegation !== null ? Long.fromValue(object.minDelegation) : Long.UZERO;
    message.maxBundleSize = object.maxBundleSize !== undefined && object.maxBundleSize !== null ? Long.fromValue(object.maxBundleSize) : Long.UZERO;
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storageProviderId = object.storageProviderId ?? 0;
    message.compressionId = object.compressionId ?? 0;
    return message;
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }
};
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    authority: "",
    id: Long.UZERO,
    payload: ""
  };
}
export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.payload = object.payload ?? "";
    return message;
  }
};
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  }
};
function createBaseMsgDisablePool(): MsgDisablePool {
  return {
    authority: "",
    id: Long.UZERO
  };
}
export const MsgDisablePool = {
  encode(message: MsgDisablePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDisablePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgDisablePool>): MsgDisablePool {
    const message = createBaseMsgDisablePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgDisablePoolResponse(): MsgDisablePoolResponse {
  return {};
}
export const MsgDisablePoolResponse = {
  encode(_: MsgDisablePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDisablePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDisablePoolResponse>): MsgDisablePoolResponse {
    const message = createBaseMsgDisablePoolResponse();
    return message;
  }
};
function createBaseMsgEnablePool(): MsgEnablePool {
  return {
    authority: "",
    id: Long.UZERO
  };
}
export const MsgEnablePool = {
  encode(message: MsgEnablePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgEnablePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgEnablePool>): MsgEnablePool {
    const message = createBaseMsgEnablePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgEnablePoolResponse(): MsgEnablePoolResponse {
  return {};
}
export const MsgEnablePoolResponse = {
  encode(_: MsgEnablePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgEnablePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEnablePoolResponse>): MsgEnablePoolResponse {
    const message = createBaseMsgEnablePoolResponse();
    return message;
  }
};
function createBaseMsgScheduleRuntimeUpgrade(): MsgScheduleRuntimeUpgrade {
  return {
    authority: "",
    runtime: "",
    version: "",
    scheduledAt: Long.UZERO,
    duration: Long.UZERO,
    binaries: ""
  };
}
export const MsgScheduleRuntimeUpgrade = {
  encode(message: MsgScheduleRuntimeUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (!message.scheduledAt.isZero()) {
      writer.uint32(32).uint64(message.scheduledAt);
    }
    if (!message.duration.isZero()) {
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
      scheduledAt: isSet(object.scheduledAt) ? Long.fromValue(object.scheduledAt) : Long.UZERO,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      binaries: isSet(object.binaries) ? String(object.binaries) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleRuntimeUpgrade>): MsgScheduleRuntimeUpgrade {
    const message = createBaseMsgScheduleRuntimeUpgrade();
    message.authority = object.authority ?? "";
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduledAt = object.scheduledAt !== undefined && object.scheduledAt !== null ? Long.fromValue(object.scheduledAt) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    message.binaries = object.binaries ?? "";
    return message;
  }
};
function createBaseMsgScheduleRuntimeUpgradeResponse(): MsgScheduleRuntimeUpgradeResponse {
  return {};
}
export const MsgScheduleRuntimeUpgradeResponse = {
  encode(_: MsgScheduleRuntimeUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleRuntimeUpgradeResponse>): MsgScheduleRuntimeUpgradeResponse {
    const message = createBaseMsgScheduleRuntimeUpgradeResponse();
    return message;
  }
};
function createBaseMsgCancelRuntimeUpgrade(): MsgCancelRuntimeUpgrade {
  return {
    authority: "",
    runtime: ""
  };
}
export const MsgCancelRuntimeUpgrade = {
  encode(message: MsgCancelRuntimeUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCancelRuntimeUpgradeResponse(): MsgCancelRuntimeUpgradeResponse {
  return {};
}
export const MsgCancelRuntimeUpgradeResponse = {
  encode(_: MsgCancelRuntimeUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelRuntimeUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelRuntimeUpgradeResponse>): MsgCancelRuntimeUpgradeResponse {
    const message = createBaseMsgCancelRuntimeUpgradeResponse();
    return message;
  }
};