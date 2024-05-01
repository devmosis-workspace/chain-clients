import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus, iBCTransferStatusFromJSON } from "./quota";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuota {
  /** authority is the address of the governance account or the Emergency Group. */
  authority: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  perDenom: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quotaDuration: Duration;
  /** Params.inflow_outflow_quota_base */
  inflowOutflowQuotaBase: string;
  /** Params.inflow_outflow_quota_rate */
  inflowOutflowQuotaRate: string;
  /** Params.inflow_outflow_token_quota_base */
  inflowOutflowTokenQuotaBase: string;
}
export interface MsgGovUpdateQuotaProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: Uint8Array;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaAmino {
  /** authority is the address of the governance account or the Emergency Group. */
  authority?: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description?: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total?: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  per_denom?: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quota_duration?: DurationAmino;
  /** Params.inflow_outflow_quota_base */
  inflow_outflow_quota_base?: string;
  /** Params.inflow_outflow_quota_rate */
  inflow_outflow_quota_rate?: string;
  /** Params.inflow_outflow_token_quota_base */
  inflow_outflow_token_quota_base?: string;
}
export interface MsgGovUpdateQuotaAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: MsgGovUpdateQuotaAmino;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
  authority: string;
  description: string;
  total: string;
  per_denom: string;
  quota_duration: DurationSDKType;
  inflow_outflow_quota_base: string;
  inflow_outflow_quota_rate: string;
  inflow_outflow_token_quota_base: string;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {}
export interface MsgGovUpdateQuotaResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: Uint8Array;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseAmino {}
export interface MsgGovUpdateQuotaResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: MsgGovUpdateQuotaResponseAmino;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseSDKType {}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatus {
  /** authority is the address of the governance account or the Emergency Group. */
  authority: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description: string;
  /** ibc_status defines status for ibc transfers */
  ibcStatus: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: Uint8Array;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusAmino {
  /** authority is the address of the governance account or the Emergency Group. */
  authority?: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description?: string;
  /** ibc_status defines status for ibc transfers */
  ibc_status?: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: MsgGovSetIBCStatusAmino;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
  authority: string;
  description: string;
  ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponse {}
export interface MsgGovSetIBCStatusResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: Uint8Array;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponseAmino {}
export interface MsgGovSetIBCStatusResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: MsgGovSetIBCStatusResponseAmino;
}
/** MsgGovSetIBCStatusResponse is a response type for Msg/GovSetIBCStatus. */
export interface MsgGovSetIBCStatusResponseSDKType {}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20Hooks {
  /** authority is the address of the governance account or the Emergency Group. */
  authority: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description: string;
  /** enabled defines if the IBC transfer hooks should be enabled or disabled. */
  enabled: boolean;
}
export interface MsgGovToggleICS20HooksProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks";
  value: Uint8Array;
}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20HooksAmino {
  /** authority is the address of the governance account or the Emergency Group. */
  authority?: string;
  /**
   * description motivating the change. Should be used only when executing by the
   * Emergency Group. Otherwise the x/gov Proposal metadata should be used.
   */
  description?: string;
  /** enabled defines if the IBC transfer hooks should be enabled or disabled. */
  enabled?: boolean;
}
export interface MsgGovToggleICS20HooksAminoMsg {
  type: "/umee.uibc.v1.MsgGovToggleICS20Hooks";
  value: MsgGovToggleICS20HooksAmino;
}
/** MsgGovToggleICS20Hooks is a request type for GovToggleICS20Hooks handler. */
export interface MsgGovToggleICS20HooksSDKType {
  authority: string;
  description: string;
  enabled: boolean;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponse {}
export interface MsgGovToggleICS20HooksResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse";
  value: Uint8Array;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponseAmino {}
export interface MsgGovToggleICS20HooksResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse";
  value: MsgGovToggleICS20HooksResponseAmino;
}
/** MsgGovToggleICS20HooksResponse is a response type for Msg/GovToggleICS20Hooks. */
export interface MsgGovToggleICS20HooksResponseSDKType {}
function createBaseMsgGovUpdateQuota(): MsgGovUpdateQuota {
  return {
    authority: "",
    description: "",
    total: "",
    perDenom: "",
    quotaDuration: Duration.fromPartial({}),
    inflowOutflowQuotaBase: "",
    inflowOutflowQuotaRate: "",
    inflowOutflowTokenQuotaBase: ""
  };
}
export const MsgGovUpdateQuota = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
  encode(message: MsgGovUpdateQuota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.perDenom !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.perDenom, 18).atomics);
    }
    if (message.quotaDuration !== undefined) {
      Duration.encode(message.quotaDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.inflowOutflowQuotaBase !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.inflowOutflowQuotaBase, 18).atomics);
    }
    if (message.inflowOutflowQuotaRate !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.inflowOutflowQuotaRate, 18).atomics);
    }
    if (message.inflowOutflowTokenQuotaBase !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.inflowOutflowTokenQuotaBase, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateQuota {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      description: isSet(object.description) ? String(object.description) : "",
      total: isSet(object.total) ? String(object.total) : "",
      perDenom: isSet(object.perDenom) ? String(object.perDenom) : "",
      quotaDuration: isSet(object.quotaDuration) ? Duration.fromJSON(object.quotaDuration) : undefined,
      inflowOutflowQuotaBase: isSet(object.inflowOutflowQuotaBase) ? String(object.inflowOutflowQuotaBase) : "",
      inflowOutflowQuotaRate: isSet(object.inflowOutflowQuotaRate) ? String(object.inflowOutflowQuotaRate) : "",
      inflowOutflowTokenQuotaBase: isSet(object.inflowOutflowTokenQuotaBase) ? String(object.inflowOutflowTokenQuotaBase) : ""
    };
  },
  fromPartial(object: Partial<MsgGovUpdateQuota>): MsgGovUpdateQuota {
    const message = createBaseMsgGovUpdateQuota();
    message.authority = object.authority ?? "";
    message.description = object.description ?? "";
    message.total = object.total ?? "";
    message.perDenom = object.perDenom ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    message.inflowOutflowQuotaBase = object.inflowOutflowQuotaBase ?? "";
    message.inflowOutflowQuotaRate = object.inflowOutflowQuotaRate ?? "";
    message.inflowOutflowTokenQuotaBase = object.inflowOutflowTokenQuotaBase ?? "";
    return message;
  },
  fromAmino(object: MsgGovUpdateQuotaAmino): MsgGovUpdateQuota {
    const message = createBaseMsgGovUpdateQuota();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.per_denom !== undefined && object.per_denom !== null) {
      message.perDenom = object.per_denom;
    }
    if (object.quota_duration !== undefined && object.quota_duration !== null) {
      message.quotaDuration = Duration.fromAmino(object.quota_duration);
    }
    if (object.inflow_outflow_quota_base !== undefined && object.inflow_outflow_quota_base !== null) {
      message.inflowOutflowQuotaBase = object.inflow_outflow_quota_base;
    }
    if (object.inflow_outflow_quota_rate !== undefined && object.inflow_outflow_quota_rate !== null) {
      message.inflowOutflowQuotaRate = object.inflow_outflow_quota_rate;
    }
    if (object.inflow_outflow_token_quota_base !== undefined && object.inflow_outflow_token_quota_base !== null) {
      message.inflowOutflowTokenQuotaBase = object.inflow_outflow_token_quota_base;
    }
    return message;
  },
  toAmino(message: MsgGovUpdateQuota): MsgGovUpdateQuotaAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.description = message.description === "" ? undefined : message.description;
    obj.total = message.total === "" ? undefined : message.total;
    obj.per_denom = message.perDenom === "" ? undefined : message.perDenom;
    obj.quota_duration = message.quotaDuration ? Duration.toAmino(message.quotaDuration) : undefined;
    obj.inflow_outflow_quota_base = message.inflowOutflowQuotaBase === "" ? undefined : message.inflowOutflowQuotaBase;
    obj.inflow_outflow_quota_rate = message.inflowOutflowQuotaRate === "" ? undefined : message.inflowOutflowQuotaRate;
    obj.inflow_outflow_token_quota_base = message.inflowOutflowTokenQuotaBase === "" ? undefined : message.inflowOutflowTokenQuotaBase;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaAminoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaProtoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuota): Uint8Array {
    return MsgGovUpdateQuota.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuota): MsgGovUpdateQuotaProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
      value: MsgGovUpdateQuota.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateQuotaResponse(): MsgGovUpdateQuotaResponse {
  return {};
}
export const MsgGovUpdateQuotaResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
  encode(_: MsgGovUpdateQuotaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateQuotaResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateQuotaResponseAmino): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
  },
  toAmino(_: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaResponseAminoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaResponseProtoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuotaResponse): Uint8Array {
    return MsgGovUpdateQuotaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
      value: MsgGovUpdateQuotaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatus(): MsgGovSetIBCStatus {
  return {
    authority: "",
    description: "",
    ibcStatus: 0
  };
}
export const MsgGovSetIBCStatus = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
  encode(message: MsgGovSetIBCStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ibcStatus !== 0) {
      writer.uint32(32).int32(message.ibcStatus);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetIBCStatus {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : -1
    };
  },
  fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    message.authority = object.authority ?? "";
    message.description = object.description ?? "";
    message.ibcStatus = object.ibcStatus ?? 0;
    return message;
  },
  fromAmino(object: MsgGovSetIBCStatusAmino): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ibc_status !== undefined && object.ibc_status !== null) {
      message.ibcStatus = object.ibc_status;
    }
    return message;
  },
  toAmino(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ibc_status = message.ibcStatus === 0 ? undefined : message.ibcStatus;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusAminoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusProtoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatus): Uint8Array {
    return MsgGovSetIBCStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
      value: MsgGovSetIBCStatus.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatusResponse(): MsgGovSetIBCStatusResponse {
  return {};
}
export const MsgGovSetIBCStatusResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
  encode(_: MsgGovSetIBCStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetIBCStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  },
  fromAmino(_: MsgGovSetIBCStatusResponseAmino): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  },
  toAmino(_: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusResponseAminoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusResponseProtoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatusResponse): Uint8Array {
    return MsgGovSetIBCStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
      value: MsgGovSetIBCStatusResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovToggleICS20Hooks(): MsgGovToggleICS20Hooks {
  return {
    authority: "",
    description: "",
    enabled: false
  };
}
export const MsgGovToggleICS20Hooks = {
  typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
  encode(message: MsgGovToggleICS20Hooks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovToggleICS20Hooks {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  fromPartial(object: Partial<MsgGovToggleICS20Hooks>): MsgGovToggleICS20Hooks {
    const message = createBaseMsgGovToggleICS20Hooks();
    message.authority = object.authority ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: MsgGovToggleICS20HooksAmino): MsgGovToggleICS20Hooks {
    const message = createBaseMsgGovToggleICS20Hooks();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: MsgGovToggleICS20Hooks): MsgGovToggleICS20HooksAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.description = message.description === "" ? undefined : message.description;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: MsgGovToggleICS20HooksAminoMsg): MsgGovToggleICS20Hooks {
    return MsgGovToggleICS20Hooks.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovToggleICS20HooksProtoMsg): MsgGovToggleICS20Hooks {
    return MsgGovToggleICS20Hooks.decode(message.value);
  },
  toProto(message: MsgGovToggleICS20Hooks): Uint8Array {
    return MsgGovToggleICS20Hooks.encode(message).finish();
  },
  toProtoMsg(message: MsgGovToggleICS20Hooks): MsgGovToggleICS20HooksProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
      value: MsgGovToggleICS20Hooks.encode(message).finish()
    };
  }
};
function createBaseMsgGovToggleICS20HooksResponse(): MsgGovToggleICS20HooksResponse {
  return {};
}
export const MsgGovToggleICS20HooksResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse",
  encode(_: MsgGovToggleICS20HooksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovToggleICS20HooksResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovToggleICS20HooksResponse>): MsgGovToggleICS20HooksResponse {
    const message = createBaseMsgGovToggleICS20HooksResponse();
    return message;
  },
  fromAmino(_: MsgGovToggleICS20HooksResponseAmino): MsgGovToggleICS20HooksResponse {
    const message = createBaseMsgGovToggleICS20HooksResponse();
    return message;
  },
  toAmino(_: MsgGovToggleICS20HooksResponse): MsgGovToggleICS20HooksResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovToggleICS20HooksResponseAminoMsg): MsgGovToggleICS20HooksResponse {
    return MsgGovToggleICS20HooksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovToggleICS20HooksResponseProtoMsg): MsgGovToggleICS20HooksResponse {
    return MsgGovToggleICS20HooksResponse.decode(message.value);
  },
  toProto(message: MsgGovToggleICS20HooksResponse): Uint8Array {
    return MsgGovToggleICS20HooksResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovToggleICS20HooksResponse): MsgGovToggleICS20HooksResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovToggleICS20HooksResponse",
      value: MsgGovToggleICS20HooksResponse.encode(message).finish()
    };
  }
};