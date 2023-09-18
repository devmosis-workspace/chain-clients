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
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.uibc.v1.Params";
  value: Uint8Array;
}
/** Params of x/uibc module */
export interface ParamsAmino {
  /** ibc_status defines the IBC ICS20 status (transfer quota or transfers disabled). */
  ibc_status: IBCTransferStatus;
  /** total_quota defines the total outflow limit of ibc-transfer in USD */
  total_quota: string;
  /** token_quota defines the outflow limit per token in USD */
  token_quota: string;
  /** quota_duration defines quota expires for each ibc-transfer denom in seconds */
  quota_duration?: DurationAmino;
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
}
function createBaseParams(): Params {
  return {
    ibcStatus: 0,
    totalQuota: "",
    tokenQuota: "",
    quotaDuration: Duration.fromPartial({})
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
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : -1,
      totalQuota: isSet(object.totalQuota) ? String(object.totalQuota) : "",
      tokenQuota: isSet(object.tokenQuota) ? String(object.tokenQuota) : "",
      quotaDuration: isSet(object.quotaDuration) ? Duration.fromJSON(object.quotaDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.ibcStatus = object.ibcStatus ?? 0;
    message.totalQuota = object.totalQuota ?? "";
    message.tokenQuota = object.tokenQuota ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      ibcStatus: isSet(object.ibc_status) ? iBCTransferStatusFromJSON(object.ibc_status) : -1,
      totalQuota: object.total_quota,
      tokenQuota: object.token_quota,
      quotaDuration: object?.quota_duration ? Duration.fromAmino(object.quota_duration) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ibc_status = message.ibcStatus;
    obj.total_quota = message.totalQuota;
    obj.token_quota = message.tokenQuota;
    obj.quota_duration = message.quotaDuration ? Duration.toAmino(message.quotaDuration) : undefined;
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