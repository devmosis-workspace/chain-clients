import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** IBCTransferStatus status of ibc-transfer quota check for inflow and outflow */
export enum IBCTransferStatus {
  /** IBC_TRANSFER_STATUS_UNSPECIFIED - UNSPECIFIED  defines a no-op status. */
  IBC_TRANSFER_STATUS_UNSPECIFIED = 0,
  /** IBC_TRANSFER_STATUS_QUOTA_DISABLED - DISABLED: all inflow and outflow quota checks are disabled. */
  IBC_TRANSFER_STATUS_QUOTA_DISABLED = 1,
  /** IBC_TRANSFER_STATUS_QUOTA_ENABLED - ENABLED: all inflow and outflow quota checks are enabled. */
  IBC_TRANSFER_STATUS_QUOTA_ENABLED = 2,
  /** IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED - DISABLED OUT: outflow quota check is disabled, while the inflow quota check is enabled. */
  IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED = 3,
  /** IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED - DISABLED IN: inflow quota check is disabled, while the outflow quota check is enabled. */
  IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED = 4,
  /** IBC_TRANSFER_STATUS_TRANSFERS_PAUSED - PAUSED: all IBC transfers are paused. */
  IBC_TRANSFER_STATUS_TRANSFERS_PAUSED = 5,
  UNRECOGNIZED = -1,
}
export const IBCTransferStatusSDKType = IBCTransferStatus;
export const IBCTransferStatusAmino = IBCTransferStatus;
export function iBCTransferStatusFromJSON(object: any): IBCTransferStatus {
  switch (object) {
    case 0:
    case "IBC_TRANSFER_STATUS_UNSPECIFIED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_UNSPECIFIED;
    case 1:
    case "IBC_TRANSFER_STATUS_QUOTA_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_DISABLED;
    case 2:
    case "IBC_TRANSFER_STATUS_QUOTA_ENABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_ENABLED;
    case 3:
    case "IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED;
    case 4:
    case "IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED;
    case 5:
    case "IBC_TRANSFER_STATUS_TRANSFERS_PAUSED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_TRANSFERS_PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IBCTransferStatus.UNRECOGNIZED;
  }
}
export function iBCTransferStatusToJSON(object: IBCTransferStatus): string {
  switch (object) {
    case IBCTransferStatus.IBC_TRANSFER_STATUS_UNSPECIFIED:
      return "IBC_TRANSFER_STATUS_UNSPECIFIED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_ENABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_ENABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_TRANSFERS_PAUSED:
      return "IBC_TRANSFER_STATUS_TRANSFERS_PAUSED";
    case IBCTransferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params of x/uibc module */
export interface Params {
  /** ibc_status defines the IBC ICS20 status (transfer quota or transfers disabled). */
  ibcStatus: IBCTransferStatus;
  /** total_quota defines the total outflow limit of ibc-transfer in USD */
  totalQuota: string;
  /** token_quota defines the outflow limit per token in USD */
  tokenQuota: string;
  /** quota_duration defines quota expires for each ibc-transfer denom in seconds */
  quotaDuration: Duration;
  /** inflow_outflow_quota_base defines the inflow outflow quota base of ibc-transfer in USD */
  inflowOutflowQuotaBase: string;
  /** inflow_outflow_quota_rate defines the rate of total inflows */
  inflowOutflowQuotaRate: string;
  /** inflow_outflow_token_quota_base defines the inflow outflow quota base for token */
  inflowOutflowTokenQuotaBase: string;
  /** ics20_hooks enables or disables the ICS20 transfer hooks. */
  ics20Hooks: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.uibc.v1.Params";
  value: Uint8Array;
}
/** Params of x/uibc module */
export interface ParamsAmino {
  /** ibc_status defines the IBC ICS20 status (transfer quota or transfers disabled). */
  ibc_status?: IBCTransferStatus;
  /** total_quota defines the total outflow limit of ibc-transfer in USD */
  total_quota?: string;
  /** token_quota defines the outflow limit per token in USD */
  token_quota?: string;
  /** quota_duration defines quota expires for each ibc-transfer denom in seconds */
  quota_duration?: DurationAmino;
  /** inflow_outflow_quota_base defines the inflow outflow quota base of ibc-transfer in USD */
  inflow_outflow_quota_base?: string;
  /** inflow_outflow_quota_rate defines the rate of total inflows */
  inflow_outflow_quota_rate?: string;
  /** inflow_outflow_token_quota_base defines the inflow outflow quota base for token */
  inflow_outflow_token_quota_base?: string;
  /** ics20_hooks enables or disables the ICS20 transfer hooks. */
  ics20_hooks?: boolean;
}
export interface ParamsAminoMsg {
  type: "/umee.uibc.v1.Params";
  value: ParamsAmino;
}
/** Params of x/uibc module */
export interface ParamsSDKType {
  ibc_status: IBCTransferStatus;
  total_quota: string;
  token_quota: string;
  quota_duration: DurationSDKType;
  inflow_outflow_quota_base: string;
  inflow_outflow_quota_rate: string;
  inflow_outflow_token_quota_base: string;
  ics20_hooks: boolean;
}
function createBaseParams(): Params {
  return {
    ibcStatus: 0,
    totalQuota: "",
    tokenQuota: "",
    quotaDuration: Duration.fromPartial({}),
    inflowOutflowQuotaBase: "",
    inflowOutflowQuotaRate: "",
    inflowOutflowTokenQuotaBase: "",
    ics20Hooks: false
  };
}
export const Params = {
  typeUrl: "/umee.uibc.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcStatus !== 0) {
      writer.uint32(8).int32(message.ibcStatus);
    }
    if (message.totalQuota !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalQuota, 18).atomics);
    }
    if (message.tokenQuota !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.tokenQuota, 18).atomics);
    }
    if (message.quotaDuration !== undefined) {
      Duration.encode(message.quotaDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.inflowOutflowQuotaBase !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.inflowOutflowQuotaBase, 18).atomics);
    }
    if (message.inflowOutflowQuotaRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.inflowOutflowQuotaRate, 18).atomics);
    }
    if (message.inflowOutflowTokenQuotaBase !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.inflowOutflowTokenQuotaBase, 18).atomics);
    }
    if (message.ics20Hooks === true) {
      writer.uint32(64).bool(message.ics20Hooks);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : -1,
      totalQuota: isSet(object.totalQuota) ? String(object.totalQuota) : "",
      tokenQuota: isSet(object.tokenQuota) ? String(object.tokenQuota) : "",
      quotaDuration: isSet(object.quotaDuration) ? Duration.fromJSON(object.quotaDuration) : undefined,
      inflowOutflowQuotaBase: isSet(object.inflowOutflowQuotaBase) ? String(object.inflowOutflowQuotaBase) : "",
      inflowOutflowQuotaRate: isSet(object.inflowOutflowQuotaRate) ? String(object.inflowOutflowQuotaRate) : "",
      inflowOutflowTokenQuotaBase: isSet(object.inflowOutflowTokenQuotaBase) ? String(object.inflowOutflowTokenQuotaBase) : "",
      ics20Hooks: isSet(object.ics20Hooks) ? Boolean(object.ics20Hooks) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.ibcStatus = object.ibcStatus ?? 0;
    message.totalQuota = object.totalQuota ?? "";
    message.tokenQuota = object.tokenQuota ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    message.inflowOutflowQuotaBase = object.inflowOutflowQuotaBase ?? "";
    message.inflowOutflowQuotaRate = object.inflowOutflowQuotaRate ?? "";
    message.inflowOutflowTokenQuotaBase = object.inflowOutflowTokenQuotaBase ?? "";
    message.ics20Hooks = object.ics20Hooks ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ibc_status !== undefined && object.ibc_status !== null) {
      message.ibcStatus = object.ibc_status;
    }
    if (object.total_quota !== undefined && object.total_quota !== null) {
      message.totalQuota = object.total_quota;
    }
    if (object.token_quota !== undefined && object.token_quota !== null) {
      message.tokenQuota = object.token_quota;
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
    if (object.ics20_hooks !== undefined && object.ics20_hooks !== null) {
      message.ics20Hooks = object.ics20_hooks;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ibc_status = message.ibcStatus === 0 ? undefined : message.ibcStatus;
    obj.total_quota = message.totalQuota === "" ? undefined : message.totalQuota;
    obj.token_quota = message.tokenQuota === "" ? undefined : message.tokenQuota;
    obj.quota_duration = message.quotaDuration ? Duration.toAmino(message.quotaDuration) : undefined;
    obj.inflow_outflow_quota_base = message.inflowOutflowQuotaBase === "" ? undefined : message.inflowOutflowQuotaBase;
    obj.inflow_outflow_quota_rate = message.inflowOutflowQuotaRate === "" ? undefined : message.inflowOutflowQuotaRate;
    obj.inflow_outflow_token_quota_base = message.inflowOutflowTokenQuotaBase === "" ? undefined : message.inflowOutflowTokenQuotaBase;
    obj.ics20_hooks = message.ics20Hooks === false ? undefined : message.ics20Hooks;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};